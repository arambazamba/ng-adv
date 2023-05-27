import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { combineLatestWith, map } from 'rxjs/operators';
import { FirebaseAuthService } from '../../fbauth/firebase-auth.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
})
export class IntroComponent implements OnInit {
  @ViewChild('register') registerTemplate!: TemplateRef<any>;
  @ViewChild('login') loginTemplate!: TemplateRef<any>;
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
  authEnabled = this.as.isAuthenticated();

  constructor(
    private dialog: MatDialog,
    private as: FirebaseAuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

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
}
