import { createFeature, createReducer, on } from '@ngrx/store';
import * as app from './app.actions';

export const appFeatureKey = 'app';

export interface AppState {
  title: string;
}

export const initialAppState: AppState = {
  title: 'Advanced Angular Development',
};

export const appState = createFeature({
  name: appFeatureKey,
  reducer: createReducer(
    initialAppState,
    on(app.changeTitle, (state, action) => ({ ...state, title: action.title }))
  )
})
