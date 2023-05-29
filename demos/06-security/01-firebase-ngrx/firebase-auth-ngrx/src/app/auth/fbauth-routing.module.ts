import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./components/login/login.module').then((m) => m.LogInModule),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./components/register/register.module').then(
            (m) => m.RegisterModule
          ),
      },
      {
        path: '**',
        redirectTo: 'log-in',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FBAuthRoutingModule { }
