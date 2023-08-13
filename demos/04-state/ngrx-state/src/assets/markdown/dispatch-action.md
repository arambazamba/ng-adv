- Examine `dispatch-action.component.ts`:

```typescript
store = inject(Store<AppState>);
isMockAuthenticated = this.store.select(appState.selectIsMockAuthenticated);

toggleAuth() {
    this.store.dispatch(appActions.toggleMockAuthenticated());
}
```