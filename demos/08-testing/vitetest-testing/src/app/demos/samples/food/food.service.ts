import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { from, map } from 'rxjs';
import { FoodItem } from './food.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  http = inject(HttpClient);

  getFood() {
    return this.http.get<FoodItem[]>(`${environment.api}food`)
  }

  getAvailableFood() {
    return from(this.getFood()).pipe(
      map((items: FoodItem[]) => items.filter((item) => item.discontinued !== true)
      ))
  }

  deleteFood(item: FoodItem) {
    return this.http.delete(`${environment.api}food/${item.id}`)
  }

  addFood(item: FoodItem) {
    return this.http.put<FoodItem>(`${environment.api}food`, item)
  }
}
