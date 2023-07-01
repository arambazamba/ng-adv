import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from 'src/app/skills/skills.service';
import { BoxedDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererModule } from '../../../shared/markdown-renderer/markdown-renderer.module';
import { Skill } from '../../../skills/skill.model';


@Component({
  selector: 'app-component-standalone',
  standalone: true,
  imports: [CommonModule, BoxedDirective, MarkdownRendererModule],
  providers: [SkillsService],
  templateUrl: './component-standalone.component.html',
  styleUrls: ['./component-standalone.component.scss']
})
export class ComponentStandaloneComponent {
  service = inject(SkillsService);
  skills = this.service.getSkills();
  skill: Skill | undefined;

  showSkill(skill: Skill) {
    this.skill = skill;
  }
}
