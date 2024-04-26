import { Component, inject } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MarkdownRendererComponent
  ],
})
export class FormArrayComponent {
  fb: FormBuilder = inject(FormBuilder);

  skillForm = this.fb.group({
    name: 'Giro',
    skills: this.fb.array([
      this.fb.group({ skill: 'Hunting', years: '9' }),
    ]),
  });

  addSkill() {
    const skillsGrp = this.skillForm.controls['skills'] as FormArray;
    skillsGrp.push(
      this.fb.group({
        skill: '',
        years: '',
      })
    );
  }

  removeSkill(index: number) {
    const skillsGrp = this.skillForm.controls['skills'] as FormArray;
    skillsGrp.removeAt(index);
  }

  checkArrayValid() {
    const skillsGrp = this.skillForm.controls['skills'] as FormArray;
    const lastSkill = skillsGrp.at(skillsGrp.length - 1);
    if (lastSkill.value.skill === '' || lastSkill.value.years === '') {
      return !false;
    }
    return !true;
  }

  saveForm() {
    console.log('saving ...', this.skillForm.value);
  }
}
