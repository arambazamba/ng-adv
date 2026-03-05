import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details',
  imports: [CommonModule, RouterModule, MatButtonModule],
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
