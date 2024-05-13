import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { combineLatestWith, map, startWith } from 'rxjs';
import { Skill } from '../../skills/skills';
import { SkillsService } from '../../skills/skills.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-reified-reactive',
  templateUrl: './reified-reactive.component.html',
  styleUrls: ['./reified-reactive.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    JsonPipe,
  ],
})
export class ReifiedReactiveComponent {
  service = inject(SkillsService);
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
}
