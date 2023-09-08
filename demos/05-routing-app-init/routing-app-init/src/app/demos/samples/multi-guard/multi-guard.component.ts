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
  allowToggleMember = this.af.isAuthenticated()
    .pipe(map((loggedin) => !loggedin));

  toggleLoggedIn() {
    this.af.toggleLoggedIn()
  }

  togglePrimeMember() {
    this.af.togglePrimeMember()
  }
}
