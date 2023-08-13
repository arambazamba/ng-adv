- Examine customers.module.ts. It defines a customers state that is loaded by customers.effects.ts

```typescript
@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    ...
    StoreModule.forFeature(customerState),
    EffectsModule.forFeature([CustomerEffects]),
  ]
})
export class CustomersModule { }
```

- Examine `customers.module.ts`. It defines a customers state that is loaded by `customers.effects.ts`

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