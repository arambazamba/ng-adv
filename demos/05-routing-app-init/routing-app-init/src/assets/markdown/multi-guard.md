Examine routing config in `demo.module.ts` and the use of guards. OnlyPrimeMembersGuard is implemented in a functional pattern which should be the preferred approach:

```typescript
{ path: 'multi-guard',
  component: MultiGuardComponent,
  children: [
      { path: 'members', component: MembersComponent,
      canActivate: [OnlyAuthenticatedGuard],},
      { path: 'prime',component: PrimeComponent,
      canActivate: [OnlyAuthenticatedGuard, OnlyPrimeMembersGuard]},
```

Toggle values in `auth.state.ts` using the buttons below and access routes. Mock member state is kept in NgRx:

```typescript
export const initialState: AuthState = {
    user: null,
    token: '',
    authEnabled: environment.authEnabled,
    isPrimeMember: false,
};
```
