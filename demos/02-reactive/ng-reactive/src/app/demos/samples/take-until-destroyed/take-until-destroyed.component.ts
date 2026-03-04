import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';

@Component({
  selector: 'app-take-until-destroyed',
  templateUrl: './take-until-destroyed.component.html',
  styleUrls: ['./take-until-destroyed.component.scss'],
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, ColumnDirective, MatFormField, MatLabel, MatInput, FormsModule, ReactiveFormsModule, MatError],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TakeUntilDestroyedComponent {

  name = new FormControl('',
    [Validators.required, Validators.minLength(3)],
    []);
  postal = new FormControl('3532', [Validators.minLength(4)]);
  city = new FormControl<string>('Peygarten-Ottenstein', [Validators.maxLength(15)]);

  constructor() {
    this.name.valueChanges.pipe(takeUntilDestroyed()).subscribe((data) =>
      console.log('Form values changed', data)
    );
    this.name.statusChanges.pipe(takeUntilDestroyed()).subscribe((data) =>
      console.log('Form status changed', data)
    );
    this.postal.valueChanges.pipe(takeUntilDestroyed()).subscribe((data) => console.log('Form values changed', data)
    );
    this.city.valueChanges.pipe(takeUntilDestroyed()).subscribe((data) =>
      console.log('Form values changed', data)
    );
  }
}
