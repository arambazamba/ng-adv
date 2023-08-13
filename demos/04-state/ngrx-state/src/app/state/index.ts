import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CustomersState, customerReducer } from '../customers/state/customers.reducer';
import { AppState, appState } from './app.state';

export interface State {
  app: AppState;
  customers: CustomersState
}

export const reducers: ActionReducerMap<State> = {
  app: appState.reducer,
  customers: customerReducer,
};

export const metaReducers: MetaReducer<State>[] = [];
