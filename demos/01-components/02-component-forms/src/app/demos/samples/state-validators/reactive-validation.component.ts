import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { asyncMailExistsValidator } from './asyncMailExistsValidator';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';
import { ColumnDirective } from 'src/app/shared/ux-lib/formatting/formatting-directives';
import { PersonService } from '../person/person.service';
import { Person } from '../person/person.model';

@Component({
  selector: 'app-reactive-validation',
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    FormsModule,
    ColumnDirective,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatRadioModule,
    MatButtonModule,
    MarkdownRendererComponent
  ],
})
export class ReactiveValidationComponent implements OnInit {
  ps = inject(PersonService);
  fb = inject(FormBuilder);
  mailExistsValidator = inject(asyncMailExistsValidator);
  person: Person = new Person();
  wealthOpts = ['poor', 'rich', 'middle_class'];

  personForm = this.fb.group({
    name: [
      this.person.name,
      [Validators.required, Validators.minLength(4), this.validateName],
    ],
    age: [this.person.age, [Validators.min(18), Validators.max(99)]],
    gender: [this.person.gender],
    email: [this.person.email,
    {
      validators: [Validators.required, Validators.email],
      asyncValidators: [this.mailExistsValidator],
      updateOn: 'blur'
    }
    ],
    wealth: [this.person.wealth],
  });


  ngOnInit() {
    this.loadData();
    this.subscribeChanges();
  }

  private loadData() {
    this.ps.getPerson().subscribe((p) => {
      this.personForm.patchValue(p);
    });
  }

  private subscribeChanges() {
    this.personForm.valueChanges.subscribe((vals) => {
      console.log('changes happening @form: ', vals);
    });
  }

  evalShowError(field: string) {
    const control = this.personForm.get(field) as FormControl;
    return control.errors != undefined &&
      control.errors != undefined &&
      control.errors['InvalidNameError']
  }

  savePerson(personForm: any): void {
    this.ps.save(personForm);
  }

  //Sample for custom sync validator
  validateName(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === 'Hugo') {
      return { InvalidNameError: true };
    }
    return null;
  }

  violatesMinLength() {
    let result = false;
    let errs: any = this.personForm.controls['name'].errors && this.personForm.controls['name'].dirty;

    if (errs == true) {
      console.log('Errors in Name field: ', errs);
      if (errs['minlength']) {
        result = true;
      }
    }
    return result;
  }

  validateForm(form: FormGroup) {
    // validated single control
    form.controls['name'].updateValueAndValidity();
    // validated form
    form.updateValueAndValidity();
    console.log('form is valid:', form.valid);
  }
}
