import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, appState } from '../../../state/app.state';
import { appActions } from '../../../state/app.actions';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-dispatch-action',
    templateUrl: './dispatch-action.component.html',
    styleUrls: ['./dispatch-action.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions, MatButton, AsyncPipe]
})
export class DispatchActionComponent {
  store = inject(Store<AppState>);
  isMockAuthenticated = this.store.select(appState.selectIsMockAuthenticated);

  toggleAuth() {
    this.store.dispatch(appActions.toggleMockAuthenticated());
  }
}