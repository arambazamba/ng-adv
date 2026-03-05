import { Component, inject, ChangeDetectionStrategy, resource, computed } from '@angular/core';
import { FoodItem } from '../../food/food.model';
import { FoodService } from '../../food/food.service';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-simple-food',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './simple-food.component.html',
  styleUrls: ['./simple-food.component.scss'],
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
  ]
})
export class SimpleFoodComponent {
  readonly fs = inject(FoodService);

  readonly food = resource({
    loader: () => lastValueFrom(this.fs.getFood())
  });

  readonly isLoading = computed(() => this.food.status() === 'loading');
  readonly hasError = computed(() => this.food.status() === 'error');

  deleteFood(item: FoodItem) {
    this.fs.deleteFood(item).subscribe(() => {
      this.food.reload();
    });
  }
}
