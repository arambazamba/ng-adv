- `createFeature` in `app.state.ts` creates the following ngrx artifacts:
    - Feature Key
    - Reducer

Additional Selectors can be defined using extraSelectors parameter.

```TypeScript
export const appState = createFeature({
  name: appFeatureKey,
  reducer: createReducer(initialAppState,
    on(appActions.toggleSideNav, (state) => ({
      ...state,
      sideNavVisible: !state.sideNavVisible,
    })),
    on(appActions.changeSideNavVisible, (state, action) => ({
      ...state,
      sideNavVisible: action.visible,
    })),
    on(appActions.changeSideNavPosition, (state, action) => ({
      ...state,
      sideNavPosition: action.position as MatDrawerMode,
    })),
    on(appActions.toggleMockAuthenticated, (state, action) => ({
      ...state, IsMockAuthenticated: !state.IsMockAuthenticated
    }))
  )
})
```

- In a live demo replace menu.service.ts with menu.facade.ts in `demo-container.component.ts` and `navbar.component.ts`