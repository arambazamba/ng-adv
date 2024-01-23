import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomersState, customersFeatureKey } from './customers.reducer';

export const getCustomerState = createFeatureSelector<CustomersState>(customersFeatureKey);

export const getCustomers = createSelector(
  getCustomerState,
  (state: CustomersState) => state.customers
);

export const getCustomerById = (id: number) => createSelector(
  getCustomers, (customers) => customers.filter(c => c.id == id)
);
