import { Component, OnInit } from '@angular/core';
import { SimpleAuthService } from '../simple-auth.service';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-simple-auth-when-stable',
    templateUrl: './simple-auth-when-stable.component.html',
    styleUrls: ['./simple-auth-when-stable.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
    ],
})
export class SimpleAuthWhenStableComponent implements OnInit {
  needsLogin = true;

  constructor(private auth: SimpleAuthService) {}

  ngOnInit() {
    this.auth.isAuthenticated().subscribe((isAuth) => {
      this.needsLogin = !isAuth;
    });
  }
}
