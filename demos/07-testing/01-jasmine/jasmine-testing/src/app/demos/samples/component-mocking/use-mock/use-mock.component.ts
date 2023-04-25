import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-use-mock',
  templateUrl: './use-mock.component.html',
  styleUrls: ['./use-mock.component.scss'],
})
export class UseMockComponent {
  constructor(private as: AuthService) {
    this.loggedIn = this.as.isAuthenticated();
  }

  loggedIn: boolean;
}
