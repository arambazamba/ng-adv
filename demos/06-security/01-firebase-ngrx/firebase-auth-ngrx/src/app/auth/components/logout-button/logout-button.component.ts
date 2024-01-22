import { Component, Input, inject } from '@angular/core';
import { AuthFacade } from '../../state/auth.facade';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatMiniFabButton } from '@angular/material/button';

@Component({
    selector: 'app-logout-button',
    templateUrl: './logout-button.component.html',
    styleUrls: ['./logout-button.component.scss'],
    standalone: true,
    imports: [
        MatButton,
        MatMiniFabButton,
        MatIcon,
    ],
})
export class LogoutButtonComponent {
  @Input() defaultButton = true;
  af = inject(AuthFacade);

  logOut() {
    this.af.signOut();
  }
}
