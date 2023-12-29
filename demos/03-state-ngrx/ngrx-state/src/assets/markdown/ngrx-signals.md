NgRx provides a selectSignal-method to allow fetching NgRx State as Signals. This is available for classix NgRx as well as NgRx Component Store

```typescript
store = inject(Store) as Store<CustomersState>;
customers = this.store.selectSignal(getCustomers);
```
