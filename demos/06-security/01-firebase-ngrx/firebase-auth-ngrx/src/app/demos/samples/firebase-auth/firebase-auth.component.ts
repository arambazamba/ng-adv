import { Component, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthFacade } from '../../../auth/state/auth.facade';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-firebase-auth',
    templateUrl: './firebase-auth.component.html',
    styleUrls: ['./firebase-auth.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent],
})
export class FirebaseAuthComponent {
  af = inject(AuthFacade);
  user$ = this.af.User.pipe(tap((u) => console.log(u)));
}
