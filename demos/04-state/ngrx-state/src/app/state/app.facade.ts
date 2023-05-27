import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleMockAuthenticated } from './app.actions';
import { AppState } from './app.reducer';
import { getIsMockAuthenticated } from './app.selector';

@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  state = inject(Store<AppState>)

  getIsMockAuthenticated() {
    return this.state.select(getIsMockAuthenticated);
  }

  toggleAuth() {
    this.state.dispatch(toggleMockAuthenticated());
  }
}
