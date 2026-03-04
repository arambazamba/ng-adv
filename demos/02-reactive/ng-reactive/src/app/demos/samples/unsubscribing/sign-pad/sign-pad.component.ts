import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, signal, ViewChild } from '@angular/core';
import { fromEvent, map, Subscription, tap } from 'rxjs';
import { MatButton } from '@angular/material/button';
import { BorderDirective } from '../../../../shared/formatting/formatting-directives';

@Component({
  selector: 'app-sign-pad',
  templateUrl: './sign-pad.component.html',
  styleUrls: ['./sign-pad.component.scss'],
  imports: [
    BorderDirective,
    MatButton,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignPadComponent implements OnDestroy {
  @ViewChild('signPad', { static: true }) canvas: ElementRef | null = null;

  subMouseEvents: Subscription | null = null;
  result = signal({ X: 0, Y: 0 });

  ngOnDestroy() {
    this.unsubscribeMouseEvts();
  }

  unsubscribeMouseEvts() {
    if (this.subMouseEvents) {
      this.subMouseEvents.unsubscribe();
      console.log('unsubscribed from Mouse Event');
    }
  }

  subscribeMouseEvts() {
    if (this.canvas) {
      const evtMouse = fromEvent(this.canvas.nativeElement, 'mousemove').pipe(
        tap((data: any) => console.log('original data', data)),
        map((evt: MouseEvent) => {
          return { X: evt.clientX, Y: evt.clientY };
        }),
        tap((data: any) => console.log('modified data', data))
      );

      this.subMouseEvents = evtMouse.subscribe((point) => {
        this.result.set(point);
        console.log('Mouse Moved @: ', point);
      });
    }
  }
}
