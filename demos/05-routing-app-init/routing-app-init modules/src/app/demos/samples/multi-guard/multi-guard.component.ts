import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthFacade } from 'src/app/auth/state/auth.facade';

@Component({
  selector: 'app-multi-guard',
  templateUrl: './multi-guard.component.html',
  styleUrls: ['./multi-guard.component.scss'],
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
