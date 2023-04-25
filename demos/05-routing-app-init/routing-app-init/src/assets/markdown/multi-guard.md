Examine routing config in `demo.module.ts` and the use of guards. OnlyPrimeMembersGuard is implemented in a functional pattern.
```typescript
{ path: 'multi-guard',
  component: MultiGuardComponent,
  children: [
      { path: 'members', component: MembersComponent,
      canActivate: [OnlyAuthenticatedGuard],},
      { path: 'prime',component: PrimeComponent,
      canActivate: [OnlyAuthenticatedGuard, OnlyPrimeMembersGuard]},
```

Toggle values in `mock-auth.service.ts` using the buttons below and access routes. Mock member state is kept in NgRx:

```typescript
export class MockAuthService {
  constructor(private af: AppFacade) {}
  ...
  isLoggedIn() {return this.af.getIsLoggedIn();}
  hasPrimeSubscription() {return this.af.getPrimeMember();}
}
```
