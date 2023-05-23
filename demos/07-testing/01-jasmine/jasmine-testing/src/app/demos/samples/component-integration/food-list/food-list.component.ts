import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food.model';
import { FoodServiceBS } from '../food.service-bs';


@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  food: FoodItem[] = [];

  constructor(private fs: FoodServiceBS) { }

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
