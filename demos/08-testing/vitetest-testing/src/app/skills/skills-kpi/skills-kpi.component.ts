import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../skills-entity.service';
import { AsyncPipe } from '@angular/common';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
@Component({
    selector: 'app-skills-kpi',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './skills-kpi.component.html',
    styleUrls: ['./skills-kpi.component.scss'],
    imports: [
        MatToolbar,
        MatToolbarRow,
        AsyncPipe,
    ]
})
export class SkillsKpiComponent {
  service = inject(SkillsEntityService)
  skills = this.service.entities$;
  ct = this.skills.pipe(map((arr: Skill[]) => arr.length));

  completed = this.skills.pipe(
    map((skills: Skill[]) => skills.filter((sk: Skill) => !sk.completed))
  );
}
