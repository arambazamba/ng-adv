import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  inject,
} from '@angular/core';
import { Skill } from '../skill.model';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skill-row',
  templateUrl: './skill-row.component.html',
  styleUrls: ['./skill-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillRowComponent {
  router = inject(Router);
  @Input() skill: Skill = new Skill();

  ngDoCheck(): void {
    if (environment.logChangeDetection) {
      console.log(`SkillRowComponent - ngDoCheck: ${this.skill.name}`);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (environment.logChanges) {
      console.log(`SkillRowComponent - ngOnChanges: ${this.skill.name}`);
    }
  }

  goToSkill() {
    console.log('goToSkill');
    this.router.navigate(['/skills/edit', this.skill.id]);
  }

}
