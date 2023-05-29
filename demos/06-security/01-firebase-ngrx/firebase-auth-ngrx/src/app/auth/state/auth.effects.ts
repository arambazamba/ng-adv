import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, pluck } from 'rxjs/operators';
import { LoginCredentials } from '../credential.model';
import { FirebaseAuthService } from '../firebase-auth.service';
import { AuthActions } from './auth.actions';


@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private as: FirebaseAuthService,
  ) { }

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logIn),
      pluck('credentials'),
      exhaustMap((pl: LoginCredentials) =>
        this.as
          .logIn(pl.email, pl.password)
          .then((cred) => AuthActions.logInSuccess({ user: cred }))
          .catch((err: Error) => AuthActions.logInFailure({ err }))
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.registerUser),
      pluck('credentials'),
      exhaustMap((pl: LoginCredentials) =>
        this.as
          .createUser(pl.email, pl.password)
          .then((cred) => AuthActions.registerUserSuccess({ user: cred }))
          .catch((err) => AuthActions.registerUserFailure(err))
      )
    )
  );

  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logOut),
      pluck('payload'),
      exhaustMap(() => this.as.logOut().then(() => AuthActions.logOutComplete()))
    )
  );
}
