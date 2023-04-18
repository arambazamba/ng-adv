import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appReducer, AppState } from './app.reducer';
import { CustomersState, customerReducer } from '../customers/customers.reducer';

export interface State {
  app: AppState;
  customer: CustomersState
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
  customer: customerReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
