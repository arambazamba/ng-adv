import { CommonModule } from '@angular/common';
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
import { FirebaseAuthUtilModule } from '../../fbauth/fbauth.module';
import { FirebaseAuthService } from '../../fbauth/firebase-auth.service';
import { ColumnDirective } from '../formatting/formatting-directives';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FirebaseAuthUtilModule, ColumnDirective]
})
export class IntroComponent {
  dialog = inject(MatDialog);
  auth = inject(FirebaseAuthService);
  router = inject(Router);

  @ViewChild('register') registerTemplate!: TemplateRef<any>;
  @ViewChild('login') loginTemplate!: TemplateRef<any>;
  @Input() title = '';
  @Input() subtitle = '';
  @Input() img = '';
  isAuthenticated = this.auth.isAuthenticated();

  logIn() {
    this.dialog
      .open(this.loginTemplate, { width: '350px' })
      .afterClosed()
      .pipe(
        combineLatestWith(this.auth.isAuthenticated()),
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
        combineLatestWith(this.auth.isAuthenticated()),
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
