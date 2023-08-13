- A simple implementation of effects is located in the customers folder. It uses the ngrx state without a facade.

```typescript
@Injectable()
export class CustomerEffects {
  actions$ = inject(Actions);
  service = inject(CustomersService);

  loadCustomers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CustomersActions.loadCustomers),
      mergeMap(() =>
        this.service.getCustomers().pipe(
          map((customers) =>
            CustomersActions.loadCustomersSuccess({ items: customers })
          ),
          catchError((err) => of(CustomersActions.loadCustomersFailure({ err })))
        )
      )
    )
  );
}
```