- Facades are optional ngrx-artifacts that a decoupling ngrx from your components. They are implemented as a service. 

```typescript
@Injectable({
  providedIn: 'root',
})
export class AppFacade {
  state = inject(Store<AppState>)

  getIsMockAuthenticated() {
    return this.state.select(appState.selectIsMockAuthenticated);
  }

  toggleAuth() {
    this.state.dispatch(appActions.toggleMockAuthenticated());
  }
}
```
- At the same time you decouple your NgRx implementation from the component.

- You can have more than one Facade for a state
