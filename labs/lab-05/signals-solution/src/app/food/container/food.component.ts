import { Component, inject } from '@angular/core';
import { foodStore } from '../store/food.store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FoodListComponent } from '../food-list/food-list.component';
import { FoodEditComponent } from '../food-edit/food-edit.component';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, FoodListComponent, FoodEditComponent],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  store = inject(foodStore)

  selectFood(item: FoodItem) {
    this.store.selectFood(item.id);
  }

  saveFood(item: FoodItem) {
    if (item.id) {
      this.store.updateFood(item);
    } else {
      this.store.addFood(item);
    }
    this.store.clearSelected();
  }
}
