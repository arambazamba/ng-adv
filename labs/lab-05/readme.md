# Using @ngrx/signal in Angular Apps

## Tasks

-   Setup a basic signal store
-   Provide CRUD and loading for food using `@ngrx/signal Signal Store`
-   Implement a container presenter pattern using signals and `input signals`

### Setup a basic signal store

-   Install `@ngrx/signal`:

    ```bash
    npm i -S @ngrx/signal
    ```

-   Add a `food/food.model.ts` to the project. You could copy this file from a previous lab:

    ```typescript
    export class FoodItem {
        id = 0;
        name = '';
        price = 0;
        calories = 0;
    }
    ```

-   Add a `food/food.service.ts` to the project. You could copy this file from a previous lab:

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

-   Add a `food/store/food.store.ts` to implement the signal store:

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

-   Add a `MatToolbar` to `food.component.ts` and inject the base store:

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

-   Place the `MatToolbar` in the template and show the food count:

    ```html
    <mat-toolbar>
        <mat-toolbar-row>
            Items in foodStore: {{ store.food.length }}
        </mat-toolbar-row>
    </mat-toolbar>
    ```

-   Test your work by running the app with `ng s -o`

### Provide CRUD and loading for food using `@ngrx/signal Signal Store`

-   Next we will use withComputed() to expose count as a store property. To do so update food.store.ts. To not forget to update the corresponding html template:

    ```typescript
    withComputed((store) => ({
        count: computed(() => store.food().length),
    }))
    ```

-   Provide add, remove, update and select:

    ```typescript
    withMethods((store) => ({
        addFood: (food: FoodItem) => {
            const items = [...store.food(), food];
            patchState(store, { food: items })
        },
        removeFood: (id: number) => {
            const items = store.food().filter((f: FoodItem) => f.id !== id);
            patchState(store, { food: items })
        },
        updateFood: (food: FoodItem) => {
            const items = store.food().filter((f: FoodItem) => f.id !== food.id);
            items.push(food);
            patchState(store, { food: items })
        },
        selectFood: (id: number) => {
            const item = store.food().find((f: FoodItem) => f.id === id);
            patchState(store, { selectedFood: item })
        },
    })),
    ```

-   In order to be able to load the initial item from the server, we will need to modify `food.store.ts` and it's withMethods section and add a `loadFood()` method:

    ```typescript
    withMethods((store, service = inject(FoodService)) => ({
        ...
        loadFood: () => {
            service.getFood().subscribe((food) => {
                patchState(store, { food })
            })
        },
    }))
    ```

    > Note: If we have set up @ngrx/data we could have used the `getAll()` method instead of `getFood()`.

-   To make sure that loadFood is called we will use withHooks() and call it in the `onInit()` hook:

    ```typescript
    withHooks({
        onInit({ loadFood }) {
            loadFood();
        },
    })
    ```

- Just to check add the following to the template and run the app:

    ```html
    <div>
        @for (item of store.food(); track $index) {
            <div>
            {{item.name}}
            </div>
        }
    </div>
    ```

### Implement a container presenter pattern using signals and `input signals`

-   Next lets add a food-list and a food-edit component:

    ```typescript
    ng g c food/food-list
    ng g c food/food-edit
    ```

