import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, combineLatestWith, startWith, tap } from 'rxjs/operators';
import { LoginCredentials } from '../credential.model';
import { AuthState } from './auth.reducer';
import {
  getAuthEnabled,
  getLoggedIn,
  getUser,
  hasToken,
} from './auth.selectors';
import { AuthActions } from './auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthFacade {
  constructor(private store: Store<AuthState>) { }

  get User() {
    return this.store.select(getUser);
  }

  isAuthenticated() {
    return this.store.select(getLoggedIn).pipe(
      combineLatestWith(this.store.select(getAuthEnabled)),
      map(([loggedIn, authEnabled]) => {
        return authEnabled == false || loggedIn;
      }),
    ).pipe(tap((x) => console.log('isAuthenticated', x)));
  }

  hasToken() {
    return this.store.select(hasToken).pipe(map((token) => token));
  }

  signIn(login: LoginCredentials) {
    this.store.dispatch(AuthActions.logIn({ credentials: login }));
  }

  signOut() {
    this.store.dispatch(AuthActions.logOut());
  }

  register(login: LoginCredentials) {
    this.store.dispatch(AuthActions.registerUser({ credentials: login }));
  }

  redirectToLogin() {
    this.store.dispatch(AuthActions.redirectToLogin());
  }

  userChanged(user: any) {
    if (user) {
      user.getIdToken().then(
        (token: string) => this.store.dispatch(AuthActions.setUser({ user, token })));
    }
  }
}
