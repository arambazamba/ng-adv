import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
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
