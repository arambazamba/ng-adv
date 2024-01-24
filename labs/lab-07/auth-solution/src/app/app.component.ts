import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { tap } from 'rxjs';
import { FirebaseAuthService } from './firebase-auth/firebase-auth.service';
import { IntroComponent } from './shared/intro/intro.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent, IntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'food-app';
  auth = inject(FirebaseAuthService);
  isAuthenticated = this.auth
    .isAuthenticated()
    .pipe(tap((auth) => console.log('authState changed to:', auth)));
}
