import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FirebaseAuthService } from './fbauth/firebase-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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
