import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FirebaseAuthService } from './auth/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleService = inject(Title);
  title: string = environment.title;
  auth = inject(FirebaseAuthService);
  isAuthenticated = this.auth
  .isAuthenticated()
  .pipe(tap((auth) => console.log('auth changed to autheticated: ', auth)));

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
