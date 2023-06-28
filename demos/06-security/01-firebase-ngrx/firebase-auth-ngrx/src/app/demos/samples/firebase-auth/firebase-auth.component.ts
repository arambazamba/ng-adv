import { Component, inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthFacade } from '../../../auth/state/auth.facade';

@Component({
  selector: 'app-firebase-auth',
  templateUrl: './firebase-auth.component.html',
  styleUrls: ['./firebase-auth.component.scss'],
})
export class FirebaseAuthComponent {
  af = inject(AuthFacade);
  user$ = this.af.User.pipe(tap((u) => console.log(u)));
}
