import { Component, inject } from '@angular/core';
import { AuthFacade } from '../auth/state/auth.facade';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  as = inject(AuthFacade);
  isAuthenticated = this.as.isAuthenticated();
}
