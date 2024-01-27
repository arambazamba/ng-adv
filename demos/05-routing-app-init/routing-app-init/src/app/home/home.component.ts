import { Component, inject } from '@angular/core';
import { AuthFacade } from '../auth/state/auth.facade';
import { IntroComponent } from '../shared/intro/intro.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [IntroComponent],
})
export class HomeComponent {
  as = inject(AuthFacade);
  isAuthenticated = this.as.isAuthenticated();
}
