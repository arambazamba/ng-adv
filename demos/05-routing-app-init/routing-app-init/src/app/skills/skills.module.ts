import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDataService, EntityDefinitionService } from '@ngrx/data';

import { SkillRowComponent } from './skill-row/skill-row.component';
import { SkillsContainerComponent } from './skills-container/skills-container.component';
import { SkillsDataService } from './skills-data.service';
import { SkillsEntityService } from './skills-entity.service';
import { SkillsKpiComponent } from './skills-kpi/skills-kpi.component';
import { entityMetadata } from './skills.metadata';
import { SkillsRoutingModule } from './skills.routing.module';
import { SkillsEditComponent } from './skills-edit/skills-edit.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
    imports: [
    CommonModule,
    SkillsRoutingModule,
    ReactiveFormsModule,
    SkillsContainerComponent,
    SkillsKpiComponent,
    SkillRowComponent,
    SkillsEditComponent,
],
    providers: [
        provideHttpClient(),
        SkillsEntityService,
        SkillsDataService
    ],
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
