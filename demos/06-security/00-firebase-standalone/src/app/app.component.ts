import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FirebaseAuthService } from './fbauth/firebase-auth.service';
import { ThemeService } from './shared/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  titleService: Title = inject(Title);
  auth: FirebaseAuthService = inject(FirebaseAuthService);
  themeService: ThemeService = inject(ThemeService);
  title: string = environment.title;
  selectedTheme: string = 'default';
  isAuthenticated: Observable<boolean> = of(false);

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.isAuthenticated = this.auth
      .isAuthenticated()
      .pipe(tap((auth) => console.log('auth changed to autheticated: ', auth)));
  }
}
