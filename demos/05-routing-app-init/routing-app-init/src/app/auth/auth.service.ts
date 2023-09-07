import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { combineLatestWith, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private authenticated: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);

  private user: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(
    null
  );

  private authEnabled = of(environment.authEnabled);

  isAuthenticated() {
    return this.authEnabled.pipe(
      combineLatestWith(this.authenticated),
      map(([authEnabled, authenticated]) => {
        return authEnabled == false || authenticated;
      })
    );
  }

  getUser() {
    return this.user.asObservable();
  }

  signIn(user: string) {
    this.user.next(user);
    this.authenticated.next(true);
  }

  signOut() {
    this.authenticated.next(false);
  }
}
