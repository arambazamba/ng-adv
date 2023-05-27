Examine the use of `firebase.auth-guard.service.ts` in `app-routing.module.ts`:

```typescript
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./demos/demos.module').then((m) => m.DemosModule),
    canLoad: [FirebaseAuthGuard],
  }
];
```
