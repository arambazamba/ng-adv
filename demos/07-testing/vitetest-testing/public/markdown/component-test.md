Navigate to folder `component-test/simple-food` and examine `simple-food.component.ts` & `simple-food.component.spec.ts`.

Navigate to folder `demos/food/`: `food.service.ts`

**Modern Vitest Pattern with Spy Objects:**

Create mock services using Vitest spies for component testing:

```typescript
import { vi } from "vitest";

beforeEach(async () => {
  const mockFS = {
    getItems: vi.fn().mockReturnValue(
      of([
        { id: 1, name: "Pad Thai", rating: 5 },
        { id: 2, name: "Green Curry", rating: 4 },
      ]),
    ),
    deleteItem: vi.fn().mockReturnValue(of(null)),
  };

  await TestBed.configureTestingModule({
    imports: [SimpleFoodComponent],
    providers: [{ provide: FoodService, useValue: mockFS }],
  }).compileComponents();
});
```

**Set Mock Return Values:**

```typescript
const mockFS = TestBed.inject(FoodService) as any;
mockFS.deleteItem.mockReturnValue(of(true));
```

**Verify Service Interactions:**

```typescript
expect(mockFS.deleteItem).toHaveBeenCalledWith(foodData[3]);
expect(mockFS.deleteItem).toHaveBeenCalledTimes(1);
```
