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
            const allItems = [...store.food()];
            const idx = allItems.findIndex((f: FoodItem) => f.id === food.id);
            allItems[idx] = food;
            patchState(store, { food: allItems })
        },
        selectFood: (id: number) => {
            const item = store.food().find((f: FoodItem) => f.id === id);
            patchState(store, { selectedFood: item })
        },
        clearSelected() {
            patchState(store, { selectedFood: null })
        }
    })),
    ```

    >Note: With the current implementation we are not persisting the changes to the server. 

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

- Food list should look like this. You can take the lab from the previous module as a reference: 

    ![Food List](_images/food-list.png)

- Add the following to the `food-list.component.ts`:

    ```typescript
    @Component({
    selector: 'app-food-list',
    standalone: true,
    imports: [MatTableModule, MatCardModule],
    templateUrl: './food-list.component.html',
    styleUrl: './food-list.component.scss'
    })
    export class FoodListComponent {
        @Input({ required: true }) food !: FoodItem[];
        @Output() onFoodSelected: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

        displayedColumns: string[] = ['id', 'name', 'price', 'calories'];
        dataSource: MatTableDataSource<FoodItem> = new MatTableDataSource<FoodItem>([]);

        ngOnChanges(changes: SimpleChanges) {
            if (changes['food']) {
            this.dataSource = new MatTableDataSource(changes['food'].currentValue);
            }
        }

        applyFilter(filterValue: string) {
            this.dataSource.filter = filterValue.trim().toLowerCase();
        }

        selectFood(p: FoodItem) {
            this.onFoodSelected.emit(p);
        }
    }
    ```        

- Add the following to the `food-list.component.html`:

    ```html
    <mat-card appearance="outlined">
        <table mat-table [dataSource]="dataSource">
            <ng-container matColumnDef="id">
            <th mat-header-cell *matHeaderCellDef>Id</th>
            <td mat-cell *matCellDef="let element">{{ element.id }}</td>
            </ng-container>

            <ng-container matColumnDef="name">
            <th mat-header-cell *matHeaderCellDef>Name</th>
            <td mat-cell *matCellDef="let element">{{ element.name }}</td>
            </ng-container>

            <ng-container matColumnDef="price">
            <th mat-header-cell *matHeaderCellDef>Price</th>
            <td mat-cell *matCellDef="let element">{{ element.price }}</td>
            </ng-container>

            <ng-container matColumnDef="calories">
            <th mat-header-cell *matHeaderCellDef>Calories</th>
            <td mat-cell *matCellDef="let element">{{ element.calories }}</td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr
            class="clickable"
            mat-row
            *matRowDef="let row; columns: displayedColumns"
            (click)="selectFood(row)"
            ></tr>
        </table>
    </mat-card>
    ```

-  Add the following to the `food-list.component.scss`:

    ```css
    mat-card {
    margin-bottom: 1rem;
    }

    table {
    width: 100%;
    }

    .clickable {
    cursor: pointer;
    }
    ```
- Food edit should look like this. You can take the lab from the previous module as a reference: 

    ![Food edit](_images/food-edit.png)


- Add the following to the `food-edit.component.ts`:

    ```typescript
    @Component({
    selector: 'app-food-edit',
    standalone: true,
    imports: [
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        ColumnDirective
    ],
    templateUrl: './food-edit.component.html',
    styleUrl: './food-edit.component.scss'
    })
        export class FoodEditComponent {
        fb = inject(FormBuilder)
        @Input({ required: true }) food: FoodItem | null = null;
        @Output() onFoodSaved: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

        foodForm: FormGroup = this.fb.group({
            id: [this.food?.id],
            name: [this.food?.name, [Validators.required, Validators.minLength(3)]],
            price: [this.food?.price, [Validators.required, Validators.min(1)]],
            calories: this.food?.calories,
        });

        ngOnChanges(changes: SimpleChanges): void {
            if (changes['food']) {
            this.foodForm.setValue(changes['food'].currentValue);
            }
        }

        saveForm(): void {
            this.onFoodSaved.emit(this.foodForm.value);
        }
    }
    ```

- Add the following to the `food-edit.component.html`:

    ```html
    <mat-card appearance="outlined">
        <mat-card-header>
            <mat-card-title>Edit</mat-card-title>
        </mat-card-header>
        <mat-card-content>
            <form [formGroup]="foodForm" novalidate column>
            <mat-form-field>
                <input matInput type="number" formControlName="id" />
            </mat-form-field>
            <mat-form-field>
                <input matInput type="text" placeholder="Name" formControlName="name" />
            </mat-form-field>
            @if ( foodForm.controls['name'].touched &&
            foodForm.controls['name'].errors != undefined ) {
            <mat-error> Name is required & must be more than 3 chars </mat-error>
            }
            <mat-form-field>
                <input
                matInput
                type="number"
                placeholder="Price"
                formControlName="price"
                />
            </mat-form-field>
            @if ( foodForm.controls['price'].touched &&
            foodForm.controls['price'].errors != undefined ) {
            <mat-error> Price must be greater than 1€ </mat-error>
            }
            <mat-form-field>
                <input
                matInput
                type="number"
                placeholder="Calories"
                formControlName="calories"
                />
            </mat-form-field>
            </form>
        </mat-card-content>
        <mat-card-actions align="end">
            <button mat-raised-button color="primary" (click)="saveForm()">Save</button>
        </mat-card-actions>
    </mat-card>
    ```

- Last but not least we will hook the container / presenter pattern by replacing the temporary html in `food.component.html`:

    ```html
    <app-food-list  [food]="store.food()" (onFoodSelected)="selectFood($event)"></app-food-list>

    @if (store.selectedFood()!=null) {
        <app-food-edit [food]="store.selectedFood()" (onFoodSaved)="saveFood($event)" ></app-food-edit>
    }
    ```

- Add the following css to `food.component.scss`:

    ```css
    .addRow{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    ```    

- Add the following code to `food.component.ts`. This time you will have to add the imports by yourself:

    ```typescript
    export class FoodComponent {
    store = inject(foodStore)

    selectFood(item: FoodItem) {
        this.store.selectFood(item.id);
    }

    saveFood(item: FoodItem) {
        if (item.id) {
                this.store.updateFood(item);
            } else {
                this.store.addFood(item);
            }
            this.store.clearSelected();
        }
    }
    ```