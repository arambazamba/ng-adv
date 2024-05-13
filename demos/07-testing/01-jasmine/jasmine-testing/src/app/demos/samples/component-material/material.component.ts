import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule
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
