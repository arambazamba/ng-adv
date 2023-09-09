import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { skillsResolver } from './skills.resolver';
import { SkillsContainerComponent } from './skills-container/skills-container.component';

const routes: Routes = [
  {
    path: '',
    component: SkillsContainerComponent,
    resolve: { skills: skillsResolver },
  },
  {
    path: 'edit/:id',
    component: SkillsEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule { }
