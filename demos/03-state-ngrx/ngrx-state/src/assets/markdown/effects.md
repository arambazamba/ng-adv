- A simple implementation of effects is located in the customers folder. It uses the ngrx state without a facade.

```typescript
export const loadCustomers$ = createEffect((actions$ = inject(Actions), service = inject(CustomersService)) => {
  return actions$.pipe(
    ofType(CustomersActions.loadCustomers),
    mergeMap(() =>
      service.getCustomers().pipe(
        map((customers) =>
          CustomersActions.loadCustomersSuccess({ items: customers })
        ),
        catchError((err) => of(CustomersActions.loadCustomersFailure({ err })))
      )
    )
  )
}, { functional: true });
```