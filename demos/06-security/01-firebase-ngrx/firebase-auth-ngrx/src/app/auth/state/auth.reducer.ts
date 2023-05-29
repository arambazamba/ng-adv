import { createReducer, on } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AuthActions } from './auth.actions';
import { FirebaseUser } from './firebase-user';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: FirebaseUser;
  token: string | null;
  authEnabled: boolean;
}

export const initialState: AuthState = {
  user: {} as FirebaseUser,
  token: '',
  authEnabled: environment.authEnabled,
};

export const reducer = createReducer(
  initialState,
  on(AuthActions.registerUserSuccess,
    AuthActions.logInSuccess, (state, action) => ({
      ...state,
      user: action.user as FirebaseUser,
    })),
  on(AuthActions.logOutComplete, (state) => ({
    ...state,
    user: {} as FirebaseUser,
    token: null,
  })),
  on(AuthActions.registerUserFailure,
    AuthActions.logInFailure, (state, action) => {
      console.log('register or logIn error:', action.err);
      return {
        ...state,
        user: {} as FirebaseUser,
        token: null,
      };
    }),
  on(AuthActions.setUser, (state, action) => {
    return {
      ...state,
      user: action.user,
      token: action.token,
    };
  })
);
