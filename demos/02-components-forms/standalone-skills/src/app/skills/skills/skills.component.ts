import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  service = inject(SkillsService);
  skills = this.service.getSkills();
}
