import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { tap } from 'rxjs';
import { environment } from '../environments/environment';
import { FirebaseAuthService } from './fbauth/firebase-auth.service';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent,
    RouterOutlet,
    AsyncPipe,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  titleService = inject(Title);
  auth = inject(FirebaseAuthService);
  title = environment.title;
  selectedTheme = 'default';
  isAuthenticated = this.auth
    .isAuthenticated()
    .pipe(tap((auth) => console.log('authState changed to:', auth)));

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}

