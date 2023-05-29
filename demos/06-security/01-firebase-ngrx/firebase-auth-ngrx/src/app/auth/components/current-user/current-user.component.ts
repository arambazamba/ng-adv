import { Component, inject } from '@angular/core';
import { AuthFacade } from '../../state/auth.facade';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent {
  af = inject(AuthFacade);
  user = this.af.User;
}
