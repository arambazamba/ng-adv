import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../../../fbauth/firebase-auth.service';
import { environment } from '../../../../environments/environment';
import { map, catchError } from 'rxjs';

@Component({
  selector: 'app-protected-api',
  templateUrl: './protected-api.component.html',
  styleUrls: ['./protected-api.component.scss'],
})
export class ProtectedApiComponent implements OnInit {
  currentUser: firebase.default.User | null = null;
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
