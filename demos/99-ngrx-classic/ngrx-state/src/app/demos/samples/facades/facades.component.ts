import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { AuthFacade } from '../../../state/auth.facade';

@Component({
    selector: 'app-facades',
    templateUrl: './facades.component.html',
    styleUrls: ['./facades.component.scss'],
    imports: [
        MarkdownRendererComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatCardActions,
        MatButton,
        AsyncPipe,
    ]
})
export class FacadesComponent {
  auth = inject(AuthFacade);
  isMockAuthenticated = this.auth.getIsAuth();

  toggleAuth() {
    this.auth.toggleAuth();
  }
}
