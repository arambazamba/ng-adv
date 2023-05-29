import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthState } from './state/auth.reducer';
import { getUser } from './state/auth.selectors';
import { AuthActions } from './state/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class FBAuthGuard {
  store = inject(Store<AuthState>)
  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.store.select(getUser).pipe(
      map((fbUser) => {
        if (!(fbUser && fbUser.email)) {
          this.store.dispatch(AuthActions.redirectToLogin());
          return false;
        }
        return true;
      })
    );
  }
}
