import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel, MatError } from '@angular/material/form-field';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-take-until-destroyed',
    templateUrl: './take-until-destroyed.component.html',
    styleUrls: ['./take-until-destroyed.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, ColumnDirective, MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule, MatError]
})
export class TakeUntilDestroyedComponent {
  destroyRef = inject(DestroyRef);

  name = new FormControl('',
    [Validators.required, Validators.minLength(3)],
    []);
  postal = new FormControl('3544', [Validators.minLength(4)]);
  city = new FormControl<string>('Idolsberg', [Validators.maxLength(15)]);

  ngOnInit() {
    this.name.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) =>
      console.log('Form status changed', data)
    );
    this.postal.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.city.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) =>
      console.log('Form values changed', data)
    );
  }
}
