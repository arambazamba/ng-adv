- A simple implementation of effects is located in the customers folder. It uses the ngrx state without a facade.

```typescript
export const loadCustomers = createEffect((actions$ = inject(Actions), service = inject(CustomersService)) => {
  return actions$.pipe(
    ofType(customersActions.loadCustomers),
    mergeMap(() =>
      service.getCustomers().pipe(
        map((customers) =>
          customersActions.loadCustomersSuccess({ customers })
        ),
        catchError((err) => of(customersActions.loadCustomersFailure({ err })))
      )
    )
  )
}, { functional: true });
```

- Register `effects` in `app.config.ts` when using standalone configuration:

  ```typescript
  provideEffects(customerEffects),
  ```  

- When having more that one effect, like in the demo state you might want use an alias for the import:

  ```typescript
  import * as demoEffects from './demos/state/demos.effects';
  provideEffects([demoEffects, customerEffects]),
  ```
