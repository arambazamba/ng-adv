import { Component, inject } from '@angular/core';
import { foodStore } from '../store/food.store';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  readonly store = inject(foodStore)

}
