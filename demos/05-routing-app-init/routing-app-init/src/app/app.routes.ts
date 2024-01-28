import { Routes } from '@angular/router';
import { authGuard } from './mock-auth/auth.guard';
import { ErrPageComponent } from './error/err-page/err-page.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'demos',
        loadChildren: () =>
            import('./demos/demo.routes').then((m) => m.demoRoutes),
    },
    {
        path: 'skills',
        loadChildren: () =>
            import('./skills/skills.routes').then((m) => m.skillRoutes),
        canLoad: [authGuard],
    },
    {
        path: 'customers',
        loadChildren: () =>
            import('./customers/customer.routes').then((m) => m.customersRoutes),
    },
    {
        path: 'auth',
        loadChildren: () => import('./mock-auth/auth.routes').then((m) => m.authRoutes),
    },
    {
        path: 'error',
        component: ErrPageComponent,
    },
];