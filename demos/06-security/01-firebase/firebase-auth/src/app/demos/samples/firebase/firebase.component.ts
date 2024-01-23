import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseAuthService } from '../../../fbauth/firebase-auth.service';
import { LoginComponent } from '../../../fbauth/components/login/login.component';
import { RegisterComponent } from '../../../fbauth/components/register/register.component';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardActions } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { FirebaseUser } from '../../../fbauth/firebase-user';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardActions,
    MatButton,
    RegisterComponent,
    LoginComponent,
  ],
})
export class FirebaseComponent implements OnInit {
  @ViewChild('register') registerTemplate!: TemplateRef<any>;
  @ViewChild('login') loginTemplate!: TemplateRef<any>;
  constructor(private dialog: MatDialog, public as: FirebaseAuthService) { }

  currentUser: FirebaseUser | null = null;

  ngOnInit() {
    this.as.getUser().subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  logIn() {
    this.dialog.open(this.loginTemplate, { width: '350px' });
  }

  registerUser() {
    this.dialog.open(this.registerTemplate, { width: '350px' });
  }
}
