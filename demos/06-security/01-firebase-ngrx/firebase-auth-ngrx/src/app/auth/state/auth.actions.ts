import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { LoginCredentials } from '../credential.model';
export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    registerUser: props<{ credentials: LoginCredentials }>(),
    registerUserSuccess: props<{ user: any }>(),
    registerUserFailure: props<{ err: Error }>(),
    logIn: props<{ credentials: LoginCredentials }>(),
    logInSuccess: props<{ user: any }>(),
    logInFailure: props<{ err: Error }>(),
    logOut: emptyProps(),
    logOutComplete: emptyProps(),
    setUser: props<{ user: any; token: string }>(),
    redirectToLogin: emptyProps(),
  }
});

