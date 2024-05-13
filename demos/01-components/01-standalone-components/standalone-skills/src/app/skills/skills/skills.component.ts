import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { SkillsService } from '../skills.service';
import { Skill } from '../skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  service = inject(SkillsService);
  skills = toSignal(this.service.getSkills());

  showSkill(skill: Skill) {
    console.log(`you selected${skill}`);
  }
}
