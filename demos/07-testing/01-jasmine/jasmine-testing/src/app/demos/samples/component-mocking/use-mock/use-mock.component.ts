import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-use-mock',
    templateUrl: './use-mock.component.html',
    styleUrls: ['./use-mock.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
    ],
})
export class UseMockComponent {
  constructor(private as: AuthService) {
    this.loggedIn = this.as.isAuthenticated();
  }

  loggedIn: boolean;
}
