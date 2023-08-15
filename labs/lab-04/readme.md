# Migrate Stateful Service to NgRx

## Tasks

- Migrate SideNavService to use NgRx. You can take the demo app as a reference or use the guide below

### Migrate SideNavService to use NgRx

NgRx installation:

```
ng add @ngrx/store
ng add @ngrx/store-devtools
```

Make sure that app.config.ts matches the following code:

```typescript
export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(withInterceptorsFromDi()),
        provideAnimations(),
        provideStore(),
        provideState(appState),
        provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ],
};
```

Create a folder `app/state` and add the following code to index.ts:

```typescript
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { appReducer, AppState } from './app.reducer';

export interface State {
  app: AppState;
}

export const reducers: ActionReducerMap<State> = {
  app: appReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
```

>Note: You might have an import error as the `app.state.ts` is not yet created. We will create it in the next steps.

Create the actions in `app.actions.ts`:

```typescript   
export const appActions = createActionGroup(
  {
    source: 'app',
    events: {
      toggleSideNav: emptyProps(),
      changeSideNavVisible: props<{ visible: boolean }>(),
      changeSideNavPosition: props<{ position: string }>(),
    },
  }
);
```

Create the state in `app.state.ts`:

```typescript
export interface AppState {
  sideNavVisible: boolean;
  sideNavPosition: MatDrawerMode;
}

export const initialAppState: AppState = {
  sideNavVisible: true,
  sideNavPosition: 'side'
};

export const appState = createFeature({
  name: 'app',
  reducer: createReducer(
    initialAppState,
    on(appActions.toggleSideNav, (state) => ({
      ...state,
      sideNavVisible: !state.sideNavVisible,
    })),
    on(appActions.changeSideNavVisible, (state) => ({
      ...state,
      sideNavVisible: !state.sideNavVisible,
    })),
    on(appActions.changeSideNavPosition, (state, action) => ({
      ...state,
      sideNavPosition: action.position as MatDrawerMode,
    }))
  )
})
```

Create a sidenav.facades.ts which is responsible to provide the responsive sidenav container. We decided to use a facades to encapsulate the BreakpointObserver logic, and thereby keep the component as simple as possible. 

```typescript
@Injectable({
  providedIn: 'root',
})
export class SideNavFacade {
  breakpointObserver = inject(BreakpointObserver);
  store = inject(Store<AppState>);

  constructor() {
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        tap((matchesBreakpoints) => {
          console.log("matchesBreakpoint: ", matchesBreakpoints.matches);
          const position: MatDrawerMode = matchesBreakpoints.matches ? 'over' : 'side';
          const visible = matchesBreakpoints.matches ? false : true;
          this.store.dispatch(appActions.changeSideNavVisible({ visible }));
          this.store.dispatch(appActions.changeSideNavPosition({ position }));
        })
      ).subscribe();
  }

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

Run the app and check the [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd). You should see the initial state of the app.

![Redux DevTools](_images/redux-dev-tools.png)

Open `navbar.component.ts` and inject the SideNavFacade instead of the SideNavService:

```typescript
export class NavbarComponent {
  ns = inject(NavbarService);
  nav = inject(SideNavFacade);
  items = this.ns.getTopItems();

  toggleMenu() {
    this.nav.toggleMenuVisibility();
  }
}
```

Open `app.component.ts` and inject the SideNavFacade instead of the SideNavService. Also, update the code to use the new facade:

```typescript
nav = inject(SideNavFacade);
...
sidenavMode = this.nav.getSideNavPosition();
sidenavVisible = this.nav.getSideNavVisible();
```

Update the code in in app.component.html:

```html
<mat-sidenav
    #sidenav class="sidebar"
    [opened]="sidenavVisible | async" 
    [mode]="(sidenavMode | async) ?? 'side'">
    ...    
</mat-sidenav>
```

Congratulations! You have successfully migrated the responsive SideNav to NgRx.
