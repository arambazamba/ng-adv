import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CustomersState, customerReducer } from '../customers/state/customers.reducer';
import { AppState, appReducer } from './app.reducer';

export interface State {
  app: AppState;
  customers: CustomersState
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
  customers: customerReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
