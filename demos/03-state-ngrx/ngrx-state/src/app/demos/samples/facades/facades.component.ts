import { Component, inject } from '@angular/core';
import { AppState, appState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { appActions } from 'src/app/state/app.actions';

@Component({
  selector: 'app-facades',
  templateUrl: './facades.component.html',
  styleUrls: ['./facades.component.scss'],
})
export class FacadesComponent {
  store = inject(Store<AppState>);
  isMockAuthenticated = this.store.select(appState.selectIsMockAuthenticated);

  toggleAuth() {
    this.store.dispatch(appActions.toggleMockAuthenticated());
  }
}
