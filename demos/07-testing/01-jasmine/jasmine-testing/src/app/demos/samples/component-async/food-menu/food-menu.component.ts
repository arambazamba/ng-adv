import { Component, inject } from '@angular/core';
import { FoodServiceDelay } from "./food-delay.service";

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.scss']
})
export class FoodMenuComponent {
  fs = inject(FoodServiceDelay);
  food = this.fs.getFood();
}
