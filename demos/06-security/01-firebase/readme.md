# Firebase Authentication

[Firebase](https://firebase.google.com/) is a platform that provides a number of services for mobile and web applications. One of these services is [Firebase Authentication](https://firebase.google.com/docs/auth), which provides a way to authenticate users using e-mail and password, Google, Facebook, Twitter, GitHub, and more.

## Register your Firebase app

- Got to [Firebase](https://console.firebase.google.com/) and create a new project (e.g. `food-app-<your-initials>`). Accept the default settings and press continue when prompted.

  ![firebase-create-web-app](_images/create-app.png)

- Create a web app in your project (e.g. `food-app-web-<your-initials>`). Accept the default settings and press `register app` when prompted and then `continue to console`.

  ![project-settings](_images/project-settings.png)

- Copy the app config from the Firebase console into your `environment.ts` file.

  ![app-config](_images/app-config.png)  

- Add an `authEnabled` key with value `true` to your environment file. Also add a `firebaseConfig` and paste the config that you just copied.

- In the Firebase console, expand `Build` and go to `Authentication` and enable `Email/Password` as a sign-in method. Skip the e-mail validation for now.