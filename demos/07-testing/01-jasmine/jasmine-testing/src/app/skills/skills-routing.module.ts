import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillResolver } from './skill.resolver';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillsListComponent } from './skills-list/skills-list.component';
import { SkillsResolver } from './skills.resolver';

const routes: Routes = [
  {
    path: '',
    component: SkillsListComponent,
    resolve: { skills: SkillsResolver },
  },
  {
    path: ':id',
    component: SkillsEditComponent,
    resolve: { skill: SkillResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
