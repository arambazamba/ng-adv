import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-use-spy',
    templateUrl: './use-spy.component.html',
    styleUrls: ['./use-spy.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
    ],
})
export class UseSpyComponent {
  constructor(private as: AuthService) {
    this.loggedIn = this.as.isAuthenticated();
  }
  loggedIn: boolean;
}
