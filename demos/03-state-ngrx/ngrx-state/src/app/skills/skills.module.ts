import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';

import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsDataService } from './skills-data.service';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { SkillsEntityService } from './skills-entity.service';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { entityMetadata } from './skills.metadata';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SkillsContainerComponent,
    SkillsKpiComponent,
    SkillRowComponent,
    SkillsEditComponent,
  ],
  providers: [SkillsEntityService, SkillsDataService],
})
export class SkillsModule {
  constructor(
    entityDefinitionService: EntityDefinitionService,
    entityDataService: EntityDataService,
    skillsDataService: SkillsDataService
  ) {
    entityDefinitionService.registerMetadataMap(entityMetadata);
    entityDataService.registerService('Skill', skillsDataService);
  }
}
