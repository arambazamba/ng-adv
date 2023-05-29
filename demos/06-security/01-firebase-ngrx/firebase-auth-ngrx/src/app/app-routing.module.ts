import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrPageComponent } from './error/err-page/err-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
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
  },
  {
    path: 'auth',
    outlet: 'auth-actions',
    loadChildren: () =>
      import('./auth/fbauth.module').then((m) => m.FBAuthModule),
  },
  {
    path: 'error',
    component: ErrPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
