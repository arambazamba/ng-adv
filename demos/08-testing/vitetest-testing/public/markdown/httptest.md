- Examine `food/food.service.ts` and `food/food.service.spec.ts` for HTTP testing with Angular services.

- HTTP tests verify that services correctly use `HttpClient` and can validate HTTP requests/responses using `HttpTestingController`.

```typescript
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private http = inject(HttpClient);

  getFood() {
    return this.http.get<FoodItem[]>(`${environment.api}food`)
  }

  getAvailableFood() {
    return this.getFood().pipe(
      map(items => items.filter(item => !item.discontinued))
    );
  }
```

**Testing Pattern:**

```typescript
beforeEach(() => {
  TestBed.configureTestingModule({
    providers: [FoodService, provideHttpClient(), provideHttpClientTesting()],
  });
});

it("should fetch food items", () => {
  const service = TestBed.inject(FoodService);
  const controller = TestBed.inject(HttpTestingController);

  service.getFood().subscribe((items) => {
    expect(items.length).toBe(3);
  });

  // Verify the request
  const req = controller.expectOne(`${environment.api}food`);
  expect(req.request.method).toBe("GET");
  req.flush([{ id: 1, name: "Pad Thai", rating: 5 }]);
});
```
