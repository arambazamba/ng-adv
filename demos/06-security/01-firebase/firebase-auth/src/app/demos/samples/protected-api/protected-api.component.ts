import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../../fbauth/firebase-auth.service';
import { environment } from '../../../../environments/environment';
import { map, catchError } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { FirebaseUser } from '../../../fbauth/firebase-user';

@Component({
  selector: 'app-protected-api',
  templateUrl: './protected-api.component.html',
  styleUrls: ['./protected-api.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButton,
    JsonPipe,
  ],
})
export class ProtectedApiComponent implements OnInit {
  currentUser: FirebaseUser | null = null;
  resp: any;

  constructor(private httpClient: HttpClient, public as: FirebaseAuthService) { }

  ngOnInit() {
    this.as.getUser().subscribe((user: any) => {
      this.currentUser = user;
    });
  }

  callCoreApi() {
    this.httpClient
      .get(`${environment.netapi}demo`)
      .pipe(
        map((data) => {
          this.resp = data;
        }),
        catchError((err) => {
          this.resp = err;
          return err;
        })
      )
      .subscribe();
  }
}
