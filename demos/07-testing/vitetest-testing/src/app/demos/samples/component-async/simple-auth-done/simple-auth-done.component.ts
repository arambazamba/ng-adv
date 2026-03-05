import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { SimpleAuthService } from '../simple-auth.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-simple-auth-done',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './simple-auth-done.component.html',
  styleUrls: ['./simple-auth-done.component.scss'],
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
  ]
})
export class SimpleAuthDoneComponent {
  protected readonly auth = inject(SimpleAuthService);
  protected readonly isAuthenticated = toSignal(this.auth.isAuthenticated(), {
    initialValue: false
  });
  protected readonly needsLogin = computed(() => !this.isAuthenticated());
}
