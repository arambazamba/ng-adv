import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CustomersState, customerState } from '../customers/state/customers.state';
import { AppState, appState } from './app.state';

export interface State {
  app: AppState;
  customers: CustomersState
}

export const reducers: ActionReducerMap<State> = {
  app: appState.reducer,
  customers: customerState.reducer,
};

export const metaReducers: MetaReducer<State>[] = [];
