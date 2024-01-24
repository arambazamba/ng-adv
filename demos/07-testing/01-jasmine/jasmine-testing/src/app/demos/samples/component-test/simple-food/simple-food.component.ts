import { Component, OnInit, inject } from '@angular/core';
import { FoodItem } from '../../food/food.model';
import { FoodService } from '../../food/food.service';

@Component({
  selector: 'app-simple-food',
  templateUrl: './simple-food.component.html',
  styleUrls: ['./simple-food.component.scss'],
})
export class SimpleFoodComponent implements OnInit {
  fs = inject(FoodService);
  food: FoodItem[] = [];

  ngOnInit() {
    this.fs.getFood().subscribe((data) => {
      this.food = data;
    });
  }

  deleteFood(food: FoodItem) {
    this.fs.deleteFood(food).subscribe(() => {
      this.food = this.food.filter((f) => f != food);
    });
  }

  updateFood(food: FoodItem) {
    this.food = this.food.filter((f) => f != food);
    this.food.push(food);
  }

  // updateFood(food: FoodItem) {
  //   let item = this.food.find((f) => f.id == food.id);
  //   if (item) {
  //     item = food;
  //   }
  // }
}
