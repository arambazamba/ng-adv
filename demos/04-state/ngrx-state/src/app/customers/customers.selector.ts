import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomersState, customersFeatureKey } from './customers.reducer';

export const getAppState = createFeatureSelector<CustomersState>(customersFeatureKey);

export const getCustomers = createSelector(
  getAppState,
  (state: CustomersState) => state.customers
);
