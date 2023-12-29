
import {
  Component,
  Input,
  TemplateRef,
  ViewChild,
  inject
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { combineLatestWith, map } from 'rxjs/operators';
import { LogInModule } from '../../auth/components/login/login.module';
import { RegisterModule } from '../../auth/components/register/register.module';
import { FBAuthModule } from '../../auth/fbauth.module';
import { FirebaseAuthService } from '../../auth/firebase-auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, FBAuthModule, LogInModule, RegisterModule],
})
export class IntroComponent {
  dialog = inject(MatDialog);
  as = inject(FirebaseAuthService);
  router = inject(Router);

  @ViewChild('register') registerTemplate!: TemplateRef<any>;
  @ViewChild('login') loginTemplate!: TemplateRef<any>;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
  authEnabled = environment.authEnabled;

  logIn() {
    this.dialog
      .open(this.loginTemplate, { width: '350px' })
      .afterClosed()
      .pipe(
        combineLatestWith(this.as.isAuthenticated()),
        map(([close, isAuthenticated]) => {
          if (isAuthenticated) {
            this.router.navigate(['demos']);
          } else {
            this.router.navigate(['/']);
          }
        })
      )
      .subscribe();
  }

  registerUser() {
    this.dialog
      .open(this.registerTemplate, { width: '350px' })
      .afterClosed()
      .pipe(
        combineLatestWith(this.as.isAuthenticated()),
        map(([close, isAuthenticated]) => {
          if (isAuthenticated) {
            this.router.navigate(['demos']);
          } else {
            this.router.navigate(['/']);
          }
        })
      )
      .subscribe();
  }

  goToDemos() {
    this.router.navigate(['demos']);
  }
}
