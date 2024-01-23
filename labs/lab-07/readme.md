# Authentication using NgRx

- Register a Firebase Project
- Add a wrapper service for Firebase Authentication
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

## Add a wrapper service for Firebase Authentication

- Add the following dependencies to your project:

  ```bash
  npm install firebase @angular/fire --save
  ```

- Add a wrapper service `fbauth.service.ts` to your project. You can take the following [reference](../../demos/06-security/01-firebase/firebase-auth/src/app/fbauth/firebase-auth.service.ts) implementation.

## Implement Auth Components

- Implement the following components:
  - `login.component.ts`
  - `register.component.ts`
  - `login-splash.component.ts`

 >Note: You can use the [Firebase Auth Demo](../../demos/06-security/01-firebase/firebase-auth/src/app/fbauth/components/) as a reference.
