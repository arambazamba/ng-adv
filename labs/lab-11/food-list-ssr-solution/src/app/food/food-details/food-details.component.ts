import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FoodService } from '../food.service';
import { ShopItemComponent } from '../shop-item/shop-item.component';

@Component({
  selector: 'app-food-details',
  standalone: true,
  imports: [CommonModule, ShopItemComponent, RouterModule],
  providers: [FoodService],
  templateUrl: './food-details.component.html',
  styleUrls: ['./food-details.component.scss']
})
export class FoodDetailsComponent {

  item = this.route.paramMap.pipe(
    switchMap(params => {
      const id = Number(params.get('id'));
      return this.fs.getFoodById(id);
    })
  );

  constructor(private fs: FoodService, private route: ActivatedRoute) { }
}
