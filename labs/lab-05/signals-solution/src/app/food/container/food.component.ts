import { Component, inject } from '@angular/core';
import { foodStore } from '../store/food.store';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {
  store = inject(foodStore)


}
