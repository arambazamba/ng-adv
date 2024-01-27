import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-form-control',
    templateUrl: './form-control.component.html',
    styleUrls: ['./form-control.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        ColumnDirective,
        MatFormField,
        MatLabel,
        MatInput,
        FormsModule,
        ReactiveFormsModule,
        MatError,
    ],
})
export class FormControlComponent implements OnInit {
  private destroy$ = new Subject();

  name = new FormControl('',
    [Validators.required, Validators.minLength(3)],
    []);
  postal = new FormControl('3544', [Validators.minLength(4)]);
  city = new FormControl<string>('Idolsberg', [Validators.maxLength(15)]);


  ngOnInit() {
    this.name.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.pipe(takeUntil(this.destroy$)).subscribe((data) =>
      console.log('Form status changed', data)
    );
    this.postal.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.city.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((data) =>
      console.log('Form values changed', data)
    );
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
