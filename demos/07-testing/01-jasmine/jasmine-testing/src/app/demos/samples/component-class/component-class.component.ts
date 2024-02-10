import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../food/food.model';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-component-class',
    template: `<app-markdown-renderer
        [md]="'component-class'"
      ></app-markdown-renderer>
      <mat-card appearance="outlined">
        <mat-card-header>
          <mat-card-title>ComponentClassComponent</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h1>{{ title }}</h1>
          @for (f of food; track f) {
            <div>{{ f.name }}</div>
          }
        </mat-card-content>
      </mat-card>
      <button mat-raised-button (click)="addFood({ id: 4, name: 'Blini with Salmon', rating: 1 })" color="primary">Add Food</button>
      `,
    styles: ['h1 { color: green; font-size: 2rem}'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatButton,
    ],
})
export class ComponentClassComponent implements OnInit {
  title = 'Food App';
  food: FoodItem[] = []

  ngOnInit(): void {
    this.food = [
      { id: 2, name: 'Pad Thai', rating: 1 },
      { id: 3, name: 'Butter Chicken', rating: 2 },
    ];
  }

  addFood(item: FoodItem) {
    this.food.push(item);
  }
}
