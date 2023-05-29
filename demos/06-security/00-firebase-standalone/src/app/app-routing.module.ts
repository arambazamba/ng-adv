import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirebaseAuthGuard } from './fbauth/firebase.auth-guard.service';
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
    canLoad: [FirebaseAuthGuard],
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./skills/skills.module').then((m) => m.SkillsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
