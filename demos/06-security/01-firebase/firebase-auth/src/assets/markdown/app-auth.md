- Toggle auth flag in environment.ts and navigate to "/":

```typescript
export const environment = {
  production: false,
  authEnabled: true,
```

- Examine `intro.component.ts` and `intro.component.html` and its use of the FireBase Auth Service.

- Also notice the below tag in app.component.html:

```html
<div gdArea="navbar">
    <app-navbar *ngIf="isAuthenticated | async"></app-navbar>
</div>
```

- Examine `current-user.component.ts` and `current-user.component.html` as well as `login.component.ts` and `login.component.html`