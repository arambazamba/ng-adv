import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthFacade } from '../../../mock-auth/state/auth.facade';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-multi-guard',
  templateUrl: './multi-guard.component.html',
  styleUrls: ['./multi-guard.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButton,
    RouterLink,
    RouterOutlet,
    AsyncPipe,
    JsonPipe,
  ],
})
export class MultiGuardComponent {
  title = 'Using multiple Auth Guards';
  auth = inject(AuthFacade);
  user = this.auth.getUser();

  btnTogglePrimeEnabled = this.auth.isAuthenticated()
    .pipe(map((LoggedIn) => !LoggedIn));

  toggleLoggedIn() {
    this.auth.toggleLoggedIn()
  }

  togglePrimeMember() {
    this.auth.togglePrimeMember()
  }
}
