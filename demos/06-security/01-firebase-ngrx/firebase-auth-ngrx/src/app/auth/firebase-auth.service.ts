import { Injectable, inject } from '@angular/core';
import { AuthFacade } from './state/auth.facade';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  fireAuth = inject(Auth);
  authState$ = authState(this.fireAuth);
  authFacade = inject(AuthFacade);
  router = inject(Router);

  constructor() {
    this.authState$.subscribe((user: any) =>
      this.authFacade.userChanged(user)
    );
  }

  isAuthenticated() {
    return this.authFacade.isAuthenticated();
  }

  createUser(email: string, password: string) {
    return createUserWithEmailAndPassword(this.fireAuth, email, password).then((userCredential) => {
      // you could take the user from here
      const user = userCredential.user;
    });
  }

  logIn(
    email: string,
    password: string
  ) {
    return signInWithEmailAndPassword(this.fireAuth, email, password).then((userCredential) => {
      // you could take the user from here
      const user = userCredential.user;
    });
  }

  logOut() {
    return this.fireAuth
      .signOut()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((err: any) => console.log('Error in signOut', err));
  }
}
