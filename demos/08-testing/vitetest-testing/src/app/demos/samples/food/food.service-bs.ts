import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal, effect } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FoodItem } from './food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceBS {
  private readonly http = inject(HttpClient);
  private readonly foodSignal = signal<FoodItem[]>([]);

  constructor() {
    this.loadFood();
  }

  private loadFood() {
    this.http
      .get<FoodItem[]>(`${environment.api}food`)
      .subscribe((data) => {
        this.foodSignal.set(data);
      });
  }

  getFood() {
    return this.foodSignal.asReadonly();
  }

  deleteFood(item: FoodItem) {
    const filtered = this.foodSignal().filter((f: FoodItem) => !this.deepEqual(f, item));
    this.foodSignal.set(filtered);
  }

  addFood(item: FoodItem) {
    this.foodSignal.update(items => [...items, item]);
  }

  private deepEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    if (obj1 == null || obj2 == null) return false;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;

    for (const key of keys1) {
      if (!this.deepEqual(obj1[key], obj2[key])) return false;
    }
    return true;
  }
}
