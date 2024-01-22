# Authentication using NgRx

- Register a Firebase Project
- Implement Firebase Login & Register
- Modify `app.component.ts` to show a Login-Splash or the app

## Register a Firebase Project

- Got to [Firebase](https://console.firebase.google.com/) and create a new project (e.g. `food-app-<your-initials>`). Accept the default settings and press continue when prompted.

  ![firebase-create-web-app](_images/create-app.png)

- Create a web app in your project (e.g. `food-app-web-<your-initials>`). Accept the default settings and press `register app` when prompted and then `continue to console`.

  ![project-settings](_images/project-settings.png)

- Copy the app config from the Firebase console into your `environment.ts` file.

  ![app-config](_images/app-config.png)  

- Add an `authEnabled` key with value `true` to your environment file. Also add a `firebaseConfig` and paste the config that you just copied.

- In the Firebase console, expand `Build` and go to `Authentication` and enable `Email/Password` as a sign-in method. Skip the e-mail validation for now.


Example:

```html
<div *ngIf="(loggedIn$ | async) == true">
  <div>
    <app-navbar></app-navbar>
  </div>
  <div class="mainrow">
    <mat-sidenav-container style="width: 100%">
      <mat-sidenav
        #sidenav
        [opened]="menuVisible$ | async"
        [mode]="menuPosition$ | async"
        class="sidebar"
      >
        Sidenav content
      </mat-sidenav>
      <mat-sidenav-content class="workbench">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  </div>
</div>

<div
  *ngIf="(loggedIn$ | async) == false"
  fxLayout="column"
  fxLayoutAlign="center center"
  class="loginsplash"
>
  <app-login-splash>
    <div class="login">
      <app-login></app-login>
    </div>
    <div class="register">
      <app-register></app-register>
    </div>
  </app-login-splash>
</div>
```

Sample Login Splash:

![login-splash](_images/login-splash.png)