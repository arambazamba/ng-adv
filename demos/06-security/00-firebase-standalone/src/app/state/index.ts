import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { reducer as AppReducer, AppState } from './app.reducer';
import { RouterStateUrl } from './router.reducer';

export interface State {
  app: AppState;
  routerReducer: RouterReducerState<RouterStateUrl>;
  // auth: AuthState;
  // demos: DemoState  -> Lazy Loaded
}

export const reducers: ActionReducerMap<State> = {
  app: AppReducer,
  routerReducer: routerReducer,
  // auth: AuthReducer,
  // demos: DemoReducer -> Lazy Loaded
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
