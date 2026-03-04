- Selectors allow you to get slices of state from the store to use in your components.

- The default selectors for all properties are created automatically by the `createFeature()` function. They can be used in components or facade services. Facade services are preferred because they provide a single point of access to the store.

- `customersState` also provides `extraSelectors`. 

```typescript
export class CustomersComponent implements OnInit {
  store = inject(Store<CustomersState>)
  customers = this.store.select(customerState.selectFilteredUsers);
```