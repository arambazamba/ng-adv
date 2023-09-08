# Food App - Routing & App Init

- Refactor Food App to use  Lazy Loading & Preloading
- Implement NgRx based Routing

## Lazy Loading & Preloading

- Examine the current routing setup and notice that food-container is already lazy loaded. 

```typescript
export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "food", loadComponent: () => import('./food/food-container/food-container.component').then(m => m.FoodContainerComponent) },
    { path: "about", component: AboutComponent }
];
```

Quickly read through [withPreloading](https://angular.io/api/router/withPreloading) in the Angular Docs. Also look through the related topics. We will use a flags based approach to enable preloading.

Create a file preloading-strategy.ts in the app folder:

```typescript
@Injectable({ providedIn: "root" })
export class FlagBasedPreloadingStrategy extends PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data?.["preload"] === true ? load() : of(null);
  }
}
```

This strategy will only preload routes that have a data property of preload set to true. We will use this on the food route in app.routes.ts:

```typescript
export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "food", data: { preload: true }, loadComponent: () => import('./food/food-container/food-container.component').then(m => m.FoodContainerComponent) },
    { path: "about", component: AboutComponent }
];
```

Update app.config.ts to use preloading:

```typescript
export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes, withPreloading(FlagBasedPreloadingStrategy)),
        ...
    ]
}
```    

Go to the network tab of the browser and reload the app. You should see the food module loaded in the background.

## NgRx based Routing

In this task we will implement a routing solution based on NgRx. This will allow us to control the routing from the state. For that purpose we will use the @ngrx/router-store package:

```
ng add @ngrx/router-store
```

>Note: If you had a clean repository you can see the changes of the ng add command. Basically it added the following provider to appConfig.ts:

```typescript
provideRouterStore()
```

Next we will add an `error-` and a `login-route` to the `app.routes.ts`. I assume that you can create the respective standalone components yourself. The routes should look like this:

```typescript
export const routes: Routes = [
    ...
    { path: "error", component: ErrorComponent },
    { path: "login", component: LoginComponent },
    { path: "**", redirectTo: "error" }
];
```


### Configuration

This effects changes in app.module.ts

Possible Settings:

```typescript
interface StoreRouterConfig {
  stateKey?: string | Selector<any, RouterReducerState<T>>;
  serializer?: new (...args: any[]) => RouterStateSerializer;
  navigationActionTiming?: NavigationActionTiming;
  routerState?: RouterState;
}
```

### Router State Serialization:

Setting to Full enables the DefaultRouterStateSerializer

```typescript
StoreRouterConnectingModule.forRoot({
  routerState: RouterState.Full,
});
```

Setting to Minimal enables the MinimalRouterStateSerialzer

```typescript
StoreRouterConnectingModule.forRoot({
  routerState: RouterState.Minimal,
});
```

REMARK: 
Dependent on Runtime Checks only the minimal Router Serializer can be used! The Full Router State will not be serializeable and therefore does not work with the Serializeability runtime checks!
An own serializer can be implemented.

Example for runtime checks
```typescript
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
      },
      metaReducers
    })
```

### Navigate by Action - Effect

e.g there is a canLoad Guard:

```typescript
@Injectable({
  providedIn: 'root'
})
export class FBAuthGuard implements CanLoad {
  constructor(private store: Store<AuthState>) {}

  // this is a canLoad Guard - it does not prevent access after a logout
  canLoad(): boolean | Observable<boolean> | Promise<boolean> {
    return this.store.select(getUser).pipe(
      map(user => {
        if (user && user.email) {
        	return true
        } else {
          this.store.dispatch(new LoginRedirect());
          return false;
        }
      })
    );
  }
}
```

The LoginRedirect can be listened to in an effect:

```typescript
@Injectable()
export class AuthEffects {
  constructor(
  	private actions$: Actions, 
  	private as: AuthService, 
  	private router:Router) {}

  // Redirect to login page
  @Effect()
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthActionTypes.LoginRedirect),
    pluck('payload'),
    exhaustMap(() => {
      this.router.navigate(['demos','login'])
      return EMPTY
    })

  );
```

This mechanism can be used to transfer the control over the viewed page completely to the state, instead of the UI and the router.
 