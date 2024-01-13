# Using Signals in Angular Apps

## Tasks

- Setup a basic signal store
- Load food using `@ngrx/signal Signal Store`
- Implement a container presenter pattern using signals and `input signals`


### Setup a basic signal store

- Install `@ngrx/signal`:

    ```bash
    npm i -S @ngrx/signal
    ```

- Add a `food/food.model.ts` to the project. You could copy this file from a previous lab:

    ```typescript
    export class FoodItem {
    id = 0;
    name = '';
    price = 0;
    calories = 0;
    }
    ```

- Add a `food/food.service.ts` to the project. You could copy this file from a previous lab:

    ```typescript
    @Injectable({
        providedIn: 'root',
    })
    export class FoodService {
        http = inject(HttpClient);

        getFood() {
            return this.http.get<FoodItem[]>(`${environment.api}/food`);
        }

        addFood(food: FoodItem) {
            return this.http.post<FoodItem>(`${environment.api}/food`, food);
        }

        updateFood(food: FoodItem) {
            return this.http.put<FoodItem>(`${environment.api}/food/${food.id}`, food);
        }

        deleteFood(id: number) {
            return this.http.delete<FoodItem>(`${environment.api}/food/${id}`);
        }
    }
    ```

- Add a `food/store/food.store.ts` to implement the signal store:

    ```typescript
    type FoodState = {
        food: FoodItem[];
        selectedFood: FoodItem | null;
    }

    const initialState: FoodState = {
        food: [],
        selectedFood: null,
    }

    export const foodStore = signalStore(
        { providedIn: 'root' },
        withState(initialState),
    )
    ```

- Add a `MatToolbar` to `food.component.ts` and inject the base store:    

    ```typescript
    @Component({
    selector: 'app-food',
    standalone: true,
    imports: [MatToolbarModule],
    templateUrl: './food.component.html',
    styleUrl: './food.component.scss'
    })
    export class FoodComponent {
    readonly store = inject(foodStore)

    }
    ```

- Place the `MatToolbar` in the template and show the food count:

    ```html
    <mat-toolbar> 
        <mat-toolbar-row>       
            Items in foodStore: {{ store.food.length }}
        </mat-toolbar-row>
    </mat-toolbar>
    ```    

- Test your work by running the app with `ng s -o`    

### Load food using `@ngrx/signal Signal Store`