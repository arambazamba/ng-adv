import { createReducer, on } from '@ngrx/store';
import { Customer } from './customer.model';
import { loadCustomersFailure, loadCustomersSuccess } from './customers.actions';

export const customersFeatureKey = 'customers';

export interface CustomersState {
  customers: Customer[];
}

export const initialAppState: CustomersState = {
  customers: [],
};

export const customerReducer = createReducer(initialAppState,
  on(loadCustomersSuccess, (state, action) => ({
    ...state,
    customers: action.items,
  })),
  on(loadCustomersFailure, (state, action) => ({
    ...state,
  })),
);
