- Examine the selectors.component.spec.ts files in /ngrx-selectors.

  ```typescript
  export const getVisibleDemos = createSelector(getDemoState, (state) =>
    selectAll(state).filter((item) => item.visible)
  );
  ```
