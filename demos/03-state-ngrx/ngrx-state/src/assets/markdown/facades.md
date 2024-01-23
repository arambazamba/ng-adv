- Facades are optional ngrx-artifacts that a decoupling ngrx from your components. They are implemented as a service. 

- The SideNavFacade implemented in `sidenav.facade.ts` encapsulates the SideNav functionality of the app. It is used in `sidenav-container.component.ts` and `navbar.component.ts`. It can be toggled also from the `side-panel.component.ts`. At the moment it is using the SideNavService and will be refactored using live coding.

```typescript
export class SideNavFacade {
  breakpointObserver = inject(BreakpointObserver);
  store = inject(Store<AppState>);

  constructor() {...}

  getSideNavVisible() {
    return this.store.select(appState.selectSideNavVisible);
  }

  getSideNavPosition() {
    return this.store.select(appState.selectSideNavPosition);
  }

  toggleMenuVisibility() {
    this.store.dispatch(appActions.toggleSideNav());
  }
}
```
