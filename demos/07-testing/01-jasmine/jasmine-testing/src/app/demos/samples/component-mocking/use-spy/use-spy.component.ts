import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-use-spy',
  templateUrl: './use-spy.component.html',
  styleUrls: ['./use-spy.component.scss'],
})
export class UseSpyComponent {
  constructor(private as: AuthService) {
    this.loggedIn = this.as.isAuthenticated();
  }
  loggedIn: boolean;
}
