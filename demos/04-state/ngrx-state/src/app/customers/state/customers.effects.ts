import { loadCustomers, loadCustomersFailure } from './customers.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects/src';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { CustomersService } from './customers.service';
@Injectable()
export class DemosEffects {
  constructor(private actions$: Actions, private service: CustomersService) { }

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCustomers),
      mergeMap(() =>
        this.service.getCustomers().pipe(
          map((customers) => ({
            type: '[Customer] loadCustomers Success',
            items: customers,
          })),
          catchError((err) => of(loadCustomersFailure({ err })))
        )
      )
    )
  );
}
