import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-material',
    templateUrl: './material.component.html',
    styleUrls: ['./material.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        FormsModule,
        ReactiveFormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatSlider,
        MatSliderThumb,
        MatButton,
    ],
})
export class MaterialComponent {
  value = 50;
  validated = false;
  sliderForm: FormGroup;

  constructor() {
    this.sliderForm = new FormGroup({
      slider: new FormControl(this.value, Validators.min(1)),
    });

    this.sliderForm.valueChanges.subscribe(
      (data: any) => (this.value = data.slider)
    );
  }

  resetSlider() {
    this.sliderForm.controls['slider'].setValue(1);
  }
}
