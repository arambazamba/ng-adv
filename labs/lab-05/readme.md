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


