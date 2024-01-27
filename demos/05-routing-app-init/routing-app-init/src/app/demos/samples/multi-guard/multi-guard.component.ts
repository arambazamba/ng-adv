import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthFacade } from 'src/app/auth/state/auth.facade';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
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
  af = inject(AuthFacade);
  user = this.af.getUser();

  btnTogglePrimeEnabled = this.af.isAuthenticated()
    .pipe(map((LoggedIn) => !LoggedIn));

  toggleLoggedIn() {
    this.af.toggleLoggedIn()
  }

  togglePrimeMember() {
    this.af.togglePrimeMember()
  }
}
