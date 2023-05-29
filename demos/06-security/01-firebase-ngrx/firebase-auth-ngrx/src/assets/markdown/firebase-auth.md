- To use Firebase Authentication go to [https://console.firebase.google.com/](https://console.firebase.google.com/) and create a new project

- Create a new app registration and copy its config to the environment.ts file

  ```typescript
  firebaseConfig: {
    apiKey: 'AIzaSyBX2RrBnZnf08NZqrHCzaZeMOYdOVD3Arg',
    authDomain: 'github-auth-d1033.firebaseapp.com',
    projectId: 'github-auth-d1033',
    storageBucket: 'github-auth-d1033.appspot.com',
    messagingSenderId: '357489682920',
    appId: '1:357489682920:web:e32602b09d5239a8149c5d',
    measurementId: 'G-6PF00XJ7H6',
  },
  ```
- Examine the content of the `auth-folder`. It contains a register and login component as well as a wrapper for the firebase auth libraries. The wrapper is used to provide the auth state to the app. 

- In this example we are storing auth state in the NgRx state which is implemented in `auth/state`

- Firebase contains a route guard and interceptor but in order to demonstrate the basics we are creating out own implementation in `fbauth-guard.service.ts` and `fbauth.interceptor.ts`

- Use the Register and Login components to register and login a user. These components use an auxiliary rout in app.component.html to display the content which is implemented as a modal dialog. By using this pattern we seperate authentication request from the main app. You can use this pattern with any other authentication provider.

  ```html
  <div class="gdMainrow">
    <router-outlet></router-outlet>
    <router-outlet name="auth-actions"></router-outlet>
  </div>
  ```

- You can test authentication by using the buttons below, or by enabling authentication in environment.ts

  ```typescript
  export const environment = {
    ...
    authEnabled: true,
  ```
