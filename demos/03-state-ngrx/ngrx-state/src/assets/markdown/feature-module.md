- Examine `customers feature` and `demos feature`. They both provide feature state slices that are also registered in `app.config.ts`. `customersState` also provides `extraSelectors`. The default selectors are created automatically by the `createFeature()` function.

```typescript
export const customerState = createFeature({
  name: 'customers',
  reducer: createReducer(initialAppState,
    on(customersActions.loadCustomersSuccess, (state, action) => ({
      ...state,
      customers: action.customers,
    })),
    on(customersActions.loadCustomersFailure, (state, action) => ({
      ...state,
    })),
    on(customersActions.setFilter, (state, action) => ({
      ...state,
      filter: action.filter,
    })),
  ),
  extraSelectors: ({ selectCustomers, selectFilter }) => ({
    selectFilteredUsers: createSelector(
      selectCustomers,
      selectFilter,
      (customers, filter) => filter == '' ? 
        customers : 
        customers.filter(customer => customer.name.toLowerCase().includes(filter.toLowerCase())
      )),
  }),
});
```