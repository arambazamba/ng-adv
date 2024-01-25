import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-logout-btn',
  templateUrl: './logout-btn.component.html',
  styleUrls: ['./logout-btn.component.scss'],
  standalone: true,
  imports: [MatButton, AsyncPipe],
})
export class LogoutBtnComponent {
  auth = inject(FirebaseAuthService);
  currentUser = this.auth.getUser();

  logOut() {
    this.auth.logOut();
  }
}
