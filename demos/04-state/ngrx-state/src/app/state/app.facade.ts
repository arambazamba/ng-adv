import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { appActions } from './app.actions';
import { AppState, appState } from './app.state';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  state = inject(Store<AppState>)

  getIsMockAuthenticated() {
    return this.state.select(appState.selectIsMockAuthenticated);
  }

  toggleAuth() {
    this.state.dispatch(appActions.toggleMockAuthenticated());
  }
}
