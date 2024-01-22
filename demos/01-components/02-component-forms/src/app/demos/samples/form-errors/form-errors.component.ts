import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { map } from 'rxjs';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { RowDirective } from '../../../shared/ux-lib/formatting/formatting-directives';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    FormsModule,
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    RowDirective,
    MatCardActions,
    MatButton,
    AsyncPipe,
    JsonPipe,
  ],
})
export class FormErrorsComponent {
  fb: FormBuilder = inject(FormBuilder);
  skillForm = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(15), this.validateName],
    ],
    age: [0, [Validators.required, Validators.min(18)]],
    skillsGrp: this.fb.array([]),
  });

  validationErrors = this.skillForm.valueChanges.pipe(
    map(() => {
      const errors: ValidationErrors[] = [];
      Object.keys(this.skillForm.controls).forEach((key) => {
        let err = this.skillForm.get(key)?.errors;
        if (err) errors.push(err);
      });
      return errors;
    })
  );

  addSkill() {
    const skillsGrp = this.skillForm.controls.skillsGrp as FormArray;
    skillsGrp.push(
      this.fb.group({
        skillName: '',
        years: '',
      })
    );
  }

  saveForm() {
    console.log('form saved', this.skillForm);
  }

  getElementsInFormArray() {
    return (this.skillForm.controls.skillsGrp as FormArray).controls;
  }

  validateName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Hugo') {
      return { nameError: true };
    }
    return null;
  }
}
