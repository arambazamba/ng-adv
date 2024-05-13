import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { NumberPickerComponent } from './number-picker/number-picker.component';

@Component({
  selector: 'app-control-value-accessor',
  templateUrl: './control-value-accessor.component.html',
  styleUrls: ['./control-value-accessor.component.scss'],
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
    NumberPickerComponent,
    MatCardActions,
    MatButton,
  ],
})
export class ControlValueAccessorComponent implements OnInit {
  fb: FormBuilder = inject(FormBuilder);
  shoppingForm: FormGroup<{
    itemName: FormControl<string | null>;
    quantity: FormControl<number | null>;
  }> = this.fb.group({
    itemName: '',
    quantity: 0,
  });

  cartItem = { itemName: 'sunflower oil', quantity: 4 };

  constructor() {
    this.shoppingForm.controls.quantity.valueChanges.subscribe((value) => {
      console.log('Quantity changed:', value);
    });

    this.shoppingForm.valueChanges.subscribe((value) => {
      console.log('Form changed:', value);
    });
  }

  ngOnInit(): void {
    this.shoppingForm = this.fb.group({
      itemName: [this.cartItem.itemName, Validators.required],
      quantity: [this.cartItem.quantity],
    });
  }

  submitCart() {
    console.log('Items in cart:', this.shoppingForm.value);
  }
}
