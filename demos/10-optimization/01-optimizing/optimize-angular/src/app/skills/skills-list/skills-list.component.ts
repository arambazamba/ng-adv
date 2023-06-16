import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../skill.model';
import { SkillsEntityService } from '../skills-entity.service';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.scss'],
})
export class SkillsListComponent {
  service = inject(SkillsEntityService);

  constructor() {
    this.skills = this.service.entities$;
  }

  // change comment to load skills from preloaded data
  // load skills from entity service
  skills: Observable<Skill[]>;
  // load skills from preloaded data that was loaded from ngrx-data
  // skills: Observable<Skill[]> = this.route.data['skills'];
}
