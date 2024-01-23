import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { skillsResolver } from './skills.resolver';

const routes: Routes = [
  {
    path: '',
    component: SkillsContainerComponent,
    resolve: { skills: skillsResolver },
  },
  {
    path: 'edit/:id',
    component: SkillsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule { }
