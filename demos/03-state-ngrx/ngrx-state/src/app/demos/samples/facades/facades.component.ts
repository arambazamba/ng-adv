import { Component, inject } from '@angular/core';
import { AppState, appState } from 'src/app/state/app.state';
import { Store } from '@ngrx/store';
import { appActions } from 'src/app/state/app.actions';
import { AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-facades',
    templateUrl: './facades.component.html',
    styleUrls: ['./facades.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatCardActions,
        MatButton,
        AsyncPipe,
    ],
})
export class FacadesComponent {
  store = inject(Store<AppState>);
  isMockAuthenticated = this.store.select(appState.selectIsMockAuthenticated);

  toggleAuth() {
    this.store.dispatch(appActions.toggleMockAuthenticated());
  }
}
