import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    {
        path: "food", loadChildren: () =>
            import('./food/food.module').then((m) => m.FoodModule),
    },
    { path: "about", component: AboutComponent }
];