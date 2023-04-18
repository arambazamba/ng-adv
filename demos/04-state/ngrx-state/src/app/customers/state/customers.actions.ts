import { createAction, props } from '@ngrx/store';
import { Customer } from '../customer.model';

export const loadCustomers = createAction('[Customer] loadCustomers');

export const loadCustomersSuccess = createAction(
  '[Customer] loadCustomers Success',
  props<{ items: Customer[] }>()
);

export const loadCustomersFailure = createAction(
  '[Customer] loadCustomers Failure',
  props<{ err: Error }>()
);
