import { Component, inject } from '@angular/core';
import { EMPTY, Observable, interval, of, throwError } from 'rxjs';
import {
  catchError,
  finalize,
  map,
  retry,
  tap
} from 'rxjs/operators';
import { DemoService } from '../../demo-base/demo.service';
import { Voucher } from '../../vouchers/voucher.model';
import { VouchersService } from '../../vouchers/voucher.service';

@Component({
  selector: 'app-err-handling',
  templateUrl: './err-handling.component.html',
  styleUrls: ['./err-handling.component.scss'],
})
export class ErrHandlingComponent {
  vs = inject(VouchersService);
  ds = inject(DemoService);

  completeStream() {
    // handle exceptions in the source / service
    const obs = (of(4, 6, 8, 'soi') as Observable<any>).pipe(
      map((nbr) => nbr / 2),
      catchError((err) => {
        console.log('handled in catchError', err);
        return EMPTY;
      })
    );

    // or in the subscriber / component
    obs.subscribe(
      (val) => console.log(val),
      (err) => console.log('handled in subscribe-error', err)
    );
  }

  // Used in tryCatchAlike
  setLabel = (v: Voucher) => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  rethrowErr() {
    this.vs
      .getVouchers()
      .pipe(
        tap((data) => console.log('logged by tap(): ', data)),
        map((vs) => vs.map(this.setLabel)),
        catchError((err) => {
          console.log('Error on getVouchers()', err);
          return throwError(() => err);
        }),
        finalize(() => console.log('finalizing ...'))
      )
      .subscribe((data) => console.log('tryCatchAlike result', data));
  }

  fallbackValue() {
    this.ds
      .getItems()
      .pipe(
        catchError((err) => {
          console.log('caught mapping error and rethrowing', err);
          return throwError(() => err);
        }),
        finalize(() => console.log('first finalize() block executed')),
        catchError((err) => {
          console.log('caught rethrown error, providing fallback value', err);
          return of([
            {
              url: 'langfeatures',
              topicid: 2,
              title: 'Language Features',
              component: 'LangFeaturesComponent',
              visible: true,
              sortOrder: 1,
            },
            {
              url: 'creating',
              topicid: 2,
              title: 'Creating Observables',
              component: 'CreatingObservableComponent',
              visible: true,
              sortOrder: 2,
            },
          ]);
        }),
        finalize(() => console.log('second finalize() block executed'))
      )
      .subscribe(
        (res) => console.log('HTTP response', res),
      );
  }

  useRetry() {
    interval(1000)
      .pipe(
        map((val) => {
          if (val > 2) throw new Error('Invalid Value');
          return val;
        }),
        retry({ count: 5, delay: 2000 }),
        catchError((err) => err)
      )
      .subscribe(
        (val) => console.log(val)
      );
  }
}
