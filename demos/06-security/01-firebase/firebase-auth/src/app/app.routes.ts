import { Routes } from '@angular/router';
import { CustomerEditComponent } from './customers/component/customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/component/customer-list/customers.component';
import { FirebaseAuthGuard } from './fbauth/firebase.auth-guard.service';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        // Lazy Load Demo Routes
        path: 'demos',
        loadChildren: () => import('./demos/demo.routes').then((m) => m.demoRoutes),
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
        path: 'skills',
        loadChildren: () =>
            import('./skills/skills.module').then((m) => m.SkillsModule),
    }
];
