import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FoodItem } from '../food/food.model';

@Component({
  selector: 'app-component-class',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mat-card appearance="outlined">
        <mat-card-header>
          <mat-card-title>ComponentClassComponent</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h1>{{ title }}</h1>
          @for (f of food(); track f.id) {
            <div>{{ f.name }}</div>
          }
        </mat-card-content>
      </mat-card>
      <button mat-raised-button (click)="addFood({ id: 4, name: 'Blini with Salmon', rating: 1 })" color="primary">Add Food</button>
      `,
  styles: ['h1 { color: green; font-size: 2rem}'],
  imports: [
    MatCardModule,
    MatButtonModule
  ]
})
export class ComponentClassComponent {
  readonly title = 'Food App';
  readonly food = signal<FoodItem[]>([
    { id: 2, name: 'Pad Thai', rating: 1 },
    { id: 3, name: 'Butter Chicken', rating: 2 },
  ]);

  addFood(item: FoodItem) {
    this.food.update(items => [...items, item]);
  }
}
