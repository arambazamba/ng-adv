- Examine `food/food.service-bs.ts` and `food/food.service-bs.spec.ts` for HTTP testing with signal-based state management.

- It represents a `FoodService` that combines `HttpClient` with Angular signals to manage local state, demonstrating modern state management patterns.

```typescript
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
```
