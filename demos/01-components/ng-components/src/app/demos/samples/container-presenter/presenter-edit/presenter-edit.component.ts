import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges, inject } from '@angular/core';
import { Person } from '../../person/person.model';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { ColumnDirective } from '../../../../shared/formatting/formatting-directives';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
  selector: 'app-presenter-edit',
  templateUrl: './presenter-edit.component.html',
  styleUrls: ['./presenter-edit.component.scss'],
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, FormsModule, ColumnDirective, ReactiveFormsModule, MatFormField, MatInput, MatCardActions, MatButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PresenterEditComponent {
  @Input({ required: true }) person: Person = new Person();
  @Input() set allowSaveString(value: string) { //input transform
    this.allowSave = value === 'true';
  }
  @Output() savePerson: EventEmitter<Person> = new EventEmitter<Person>();

  allowSave = true;
  fb = inject(FormBuilder);

  personForm: FormGroup = this.fb.group({
    id: [this.person.id],
    name: [this.person.name, [Validators.required, Validators.minLength(3)]],
    age: [this.person.age, [Validators.required, Validators.min(0), Validators.max(120)],],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['person']) {
      this.personForm.patchValue(changes['person'].currentValue);
    }
  }

  doSave() {
    let p = { ... this.person, ... this.personForm.value };
    this.savePerson.emit(p);
  }

  doDelete() {
    console.log(`deleting ${this.person.name}`);
  }
}
