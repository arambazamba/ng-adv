- BreakpointObserver provides a responsive API that allows calling code to determine if it is matching a specific media query. 
- This is used in `sidenav.service.ts` to change the sidenav mode

  ```typescript
  this.breakpointObserver
    .observe(['(min-width: 600px)'])
    .subscribe((state: BreakpointState) => {
      this.matches = state.matches ? false : true;
    })
  ```
