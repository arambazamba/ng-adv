import { createReducer, on } from '@ngrx/store';
import { Customer } from '../customer.model';
import { CustomersActions } from './customers.actions';

export const customersFeatureKey = 'customers';

export interface CustomersState {
  customers: Customer[];
}

export const initialAppState: CustomersState = {
  customers: [],
};

export const customerReducer = createReducer(initialAppState,
  on(CustomersActions.loadCustomersSuccess, (state, action) => ({
    ...state,
    customers: action.items,
  })),
  on(CustomersActions.loadCustomersFailure, (state, action) => ({
    ...state,
  })),
);
