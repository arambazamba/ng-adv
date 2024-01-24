# Authentication using NgRx

-   Register a Firebase Project
-   Copy and Use the provided Firebase Authentication artifacts

## Register a Firebase Project

-   Got to [Firebase](https://console.firebase.google.com/) and create a new project (e.g. `food-app-<your-initials>`). Accept the default settings and press continue when prompted.

    ![firebase-create-web-app](_images/create-app.png)

-   Create a web app in your project (e.g. `food-app-web-<your-initials>`). Accept the default settings and press `register app` when prompted and then `continue to console`.

    ![project-settings](_images/project-settings.png)

-   Copy the app config from the Firebase console into your `environment.ts` file.

    ![app-config](_images/app-config.png)

-   Add an `authEnabled` key with value `true` to your environment file. Also add a `firebaseConfig` and paste the config that you just copied.

-   In the Firebase console, expand `Build` and go to `Authentication` and enable `Email/Password` as a sign-in method. Skip the e-mail validation for now.

## Copy and Use the provided Firebase Authentication artifacts

- Add the following dependencies to your project:

    ```bash
    npm install firebase @angular/fire --save
    ```

- Copy  to your project. You can take the following [reference](../../demos/06-security/01-firebase/firebase-auth/) implementation.

- Provide the firebase services in `app.config.ts`:

  ```typescript
  importProvidersFrom(
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  )
  ```

- Add the following to app.component.ts:

    ```typescript
    auth = inject(FirebaseAuthService);
    isAuthenticated = this.auth
      .isAuthenticated()
      .pipe(tap((auth) => console.log('authState changed to:', auth)));
    ```

- Add the following to nav.component.html:

    ```html
    <div *ngIf="isAuthenticated | async">
      <button mat-button (click)="auth.logout()">Logout</button>
    </div>
    ```

- Import and add `current user component` and the `logout button` to nav.component.html


## Implement Auth Components

-   Implement the following components:
    -   `login.component.ts`
    -   `register.component.ts`
    -   `login-splash.component.ts`

> Note: You can use the [Firebase Auth Demo](../../demos/06-security/01-firebase/firebase-auth/src/app/fbauth/components/) as a reference.
