import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatestWith, map, startWith } from 'rxjs';
import { Skill } from '../../skills/skills';
import { SkillsService } from '../../skills/skills.service';

@Component({
  selector: 'app-reified-reactive',
  templateUrl: './reified-reactive.component.html',
  styleUrls: ['./reified-reactive.component.scss'],
})
export class ReifiedReactiveComponent {
  filter$ = new FormControl('', { nonNullable: true });

  skills$ = this.service.getSkills().pipe(
    // initialization: startWith('') will emit an empty string to the stream
    combineLatestWith(this.filter$.valueChanges.pipe(startWith(''))),
    map(([skills, filter]) => {
      return filter == ''
        ? skills
        : skills.filter((skill: Skill) => skill.name.includes(filter));
    })
  );

  constructor(private service: SkillsService) { }
}
