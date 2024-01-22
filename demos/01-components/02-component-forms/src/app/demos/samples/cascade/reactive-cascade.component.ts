import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { BorderDirective } from 'src/app/shared/ux-lib/formatting/formatting-directives';

@Component({
  selector: 'app-reactive-cascade',
  templateUrl: './reactive-cascade.component.html',
  styleUrls: ['./reactive-cascade.component.scss'],
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    MatLabel,
    MatSelect,
    MatOption,
    MatButton,
    BorderDirective
  ],
})
export class ReactiveCascadeComponent {
  fb: FormBuilder = inject(FormBuilder);

  readonly selectValues = [
    {
      type: 'Frameworks',
      values: ['Angular', 'React', '.NET Core', 'Spring']
    },
    {
      type: 'Languages',
      values: ['TypeScript', 'JavaScript', 'C#', 'Java', 'Python'],
    },
    {
      type: 'Cloud',
      values: ['Azure', 'AWS', 'Google']
    },
  ];

  selects: string[] = [];

  // Type the form using type inference
  skillsGrp = this.fb.nonNullable.group({
    techType: [''],
    techValues: [''],
  });

  profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    skills: this.fb.array([this.skillsGrp]),
  });

  saveProfileForm() {
    console.log(this.profileForm.value);
  }

  getCriteria(type: any) {
    const select = this.selectValues.find((_) => _.type == type);
    return select ? select.values : select;
  }

  saveForm() {
    console.log('form saves:', this.profileForm);
  }

  addSkill() {
    this.profileForm.controls.skills.push(this.skillsGrp);
  }
}
