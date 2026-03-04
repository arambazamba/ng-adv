import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { appActions } from './app.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthFacade {
  state = inject(Store<AppState>)

  toggleAuth() {
    this.state.dispatch(appActions.toggleMockAuthenticated());
  }

  getIsAuth() {
    return this.state.select(state => state.app.IsMockAuthenticated);
  }
}
