import { Component, OnInit, inject } from '@angular/core';
import { FoodItem } from 'src/app/food/food.model';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss'],
})
export class FoodContainerComponent implements OnInit {
  fs = inject(FoodService);
  food: FoodItem[] = [];
  selected: FoodItem | undefined = undefined;

  ngOnInit(): void {
    this.fs.getFood().subscribe((food) => {
      this.food = food;
    });
  }

  selectFood(f: FoodItem) {
    this.selected = { ...f };
  }

  addFood() {
    this.selected = new FoodItem();
  }

  saveFood(f: FoodItem) {

  }
}
