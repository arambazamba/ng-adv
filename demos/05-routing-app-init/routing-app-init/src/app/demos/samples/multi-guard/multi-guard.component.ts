import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppFacade } from '../../../state/app.facade';

@Component({
  selector: 'app-multi-guard',
  templateUrl: './multi-guard.component.html',
  styleUrls: ['./multi-guard.component.scss'],
})
export class MultiGuardComponent {
  title = 'Using multible Auth Guards';
  af = inject(AppFacade);
  user = this.af.getUser();
  allowToggleMember = this.af.getIsLoggedIn()
    .pipe(map((loggedin) => !loggedin));

}
