import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { CustomersState, customerState } from '../customers/state/customers.state';
import { AppState, appState } from './app.state';

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appState.reducer
};

export const metaReducers: MetaReducer<State>[] = [];
