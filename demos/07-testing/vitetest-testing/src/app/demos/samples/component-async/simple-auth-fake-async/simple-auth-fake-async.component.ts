import { Component, inject, ChangeDetectionStrategy, computed } from '@angular/core';
import { SimpleAuthService } from '../simple-auth.service';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-simple-auth-fake-async',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './simple-auth-fake-async.component.html',
  styleUrls: ['./simple-auth-fake-async.component.scss'],
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
  ]
})
export class SimpleAuthFakeAsyncComponent {
  protected readonly auth = inject(SimpleAuthService);
  protected readonly isAuthenticated = toSignal(this.auth.isAuthenticated(), {
    initialValue: false
  });
  readonly needsLogin = computed(() => !this.isAuthenticated());
}
