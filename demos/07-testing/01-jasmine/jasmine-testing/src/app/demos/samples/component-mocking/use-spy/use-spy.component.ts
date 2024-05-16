import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-use-spy',
  templateUrl: './use-spy.component.html',
  styleUrls: ['./use-spy.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
  ],
})
export class UseSpyComponent {
  auth = inject(AuthService);

  loggedIn = this.auth.isAuthenticated();
}
