import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { FoodItem } from '../../food/food.model';

@Component({
  selector: 'app-food-row',
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './food-row.component.html',
  styleUrls: ['./food-row.component.scss'],
  imports: [MatIcon]
})
export class FoodRowComponent {
  food = input.required<FoodItem>();
  delete = output<FoodItem>();
  edit = output<FoodItem>();

  deleteFood() {
    if (this.food != null) {
      this.delete.emit(this.food())
    };
  }

  editFood() {
    if (this.food != null) {
      this.edit.emit(this.food())
    };
  }
}
