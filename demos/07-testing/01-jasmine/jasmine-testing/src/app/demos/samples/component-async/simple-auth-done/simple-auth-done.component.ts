import { Component, OnInit, inject } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { SimpleAuthService } from '../simple-auth.service';

@Component({
  selector: 'app-simple-auth-done',
  templateUrl: './simple-auth-done.component.html',
  styleUrls: ['./simple-auth-done.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
  ],
})
export class SimpleAuthDoneComponent implements OnInit {
  auth = inject(SimpleAuthService);
  needsLogin = true;

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.needsLogin = !isAuth;
    });
  }
}
