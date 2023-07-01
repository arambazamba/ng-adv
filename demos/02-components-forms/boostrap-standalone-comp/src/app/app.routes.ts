import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'skills',
    loadComponent: () => import('./skills/skills/skills.component').then(m => m.SkillsComponent)
  }
]
