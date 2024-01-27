import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';
import { CustomerEditComponent } from './customers/component/customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/component/customer-list/customers.component';
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
            import('./demos/demos.module').then((m) => m.DemosModule),
    },
    {
        path: 'skills',
        loadChildren: () =>
            import('./skills/skills.module').then((m) => m.SkillsModule),
        canLoad: [authGuard],
    },
    {
        path: 'customers',
        component: CustomersComponent,
    },
    {
        path: 'customers/:id',
        component: CustomerEditComponent,
    },
    {
        path: 'auth',
        outlet: 'actions',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'error',
        component: ErrPageComponent,
    },
];