import { Component, OnInit, inject } from '@angular/core';
import { FoodItem } from '../../food/food.model';
import { FoodServiceBS } from '../../food/food.service-bs';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  food: FoodItem[] = [];
  fs = inject(FoodServiceBS);

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.food = this.food.filter((i) => i != food);
    this.fs.deleteFood(food);
  }
}
