# Food App Project - Components & Forms

- Add Api support using [json-server](https://github.com/typicode/json-server)

- Refactor `food-edit.component` to be implemented as a Reactive Form using FormBuilder.

    Note: You can take the following components as a [reference](https://github.com/arambazamba/ng-adv/tree/main/demos/02-components-forms/component-forms/src/app/demos/samples/forms-builder):

- Implement Validation for the name filed to be required with min lenght of 3 and the price filed to be positive

    ![edit-form](_images/edit-form.png)

    > Note: You can take the following components as a [reference](https://github.com/arambazamba/ng-adv/tree/main/demos/02-components-forms/component-forms/src/app/demos/samples/validaton-intro):


- Convert the project to bootstrap and use standalone components

## Guide

-   Add the following db.json to the root of the project:

```json
{
    "food": [
        {
            "id": 1,
            "name": "Butter Chicken",
            "price": 9,
            "calories": 1200
        },
        {
            "id": 2,
            "name": "Curry Wurst",
            "price": 2.7,
            "calories": 730
        },
        {
            "id": 3,
            "name": "Wiener Schnitzel",
            "price": 8.3,
            "calories": 600
        }
    ]
}
```

-   Start the json-server with `json-server db.json --watch`

-   Add the following property to environment.ts:

```typescript
 api: "http://localhost:3000/",
```

-   Update the food.service.ts to use the api property from environment.ts

```typescript
@Injectable({
    providedIn: 'root',
})
export class FoodService {
    private url = `${environment.api}food`;

    constructor(private httpClient: HttpClient) {}

    getFood() {
        return this.httpClient.get<FoodItem[]>(this.url);
    }

    addFood(food: FoodItem) {
        return this.httpClient.post<FoodItem>(this.url, food);
    }

    updateFood(food: FoodItem) {
        return this.httpClient.put<FoodItem>(`${this.url}/${food.id}`, food);
    }

    deleteFood(id: number) {
        return this.httpClient.delete<FoodItem>(`${this.url}/${id}`);
    }
}
```

-   Add ReactiveFormsModule to app.module.ts

-   Inject FormBuilder to the constructor of food-edit.component.ts and initalize the foodForm FormGroup. Add a minLength validator to the name field and a min validator to the price field.

-   Initialize @Input() food with a new FoodItem() in food-edit.component.ts

-   Add a readonly form field for the id in food-edit.component.html

-   Replace the ngModel bindings with formControlName bindings in food-edit.component.html

-   Add a from tag below the mat-card-content tag in food-edit.component.html and attach a

-   Add mat-error elements to display validation errors in food-edit.component.html

-   Add the following ngOnChanges method to food-edit.component.ts

    ```typescript
    ngOnChanges(changes: SimpleChanges): void {
    if (changes['food']) {
      this.foodForm.setValue(changes['food'].currentValue);
    }
  }
    ```

-   Implement the onSubmit method in food-edit.component.ts

    ```typescript
    saveForm(): void {
      console.log('food to save', this.foodForm.value);
      this.onFoodSaved.emit(this.foodForm.value);
    }
    ```

-   Add the following `saveFood-method`to food-container.component.ts:

    ```typescript
    saveFood(f: FoodItem) {
        let arr = [...this.food]
        if (f.id == 0) {
            this.fs.addFood(f).subscribe((food) => {
            arr.push(food);
            this.food = arr;
            this.selected = undefined;
            });
        } else {
            this.fs.updateFood(f).subscribe((food) => {
            const index = arr.findIndex((f) => f.id === food.id);
            arr[index] = food;
            this.food = arr;
            this.selected = undefined;
            });
        }
    }
    ```

## Convert the project to bootstrap and use standalone components

>Note: You might want to commit your changes between the different steps

- Convert the project to use standalone components by running the following command two times:    

    ```bash
    ng g @angular/core:standalone
    ```

    - On the first run select: Convert all components, directives and pipes to standalone

    - On the second run select: Bootstrap the application using standalone APIs

- Open `main.ts` and use `Visual Studio Code - Organize Imports` to clean up the imports

- To add the routing configuration create a new file `routes.ts` and add the following content:

    ```typescript
    import { Routes } from '@angular/router';
    import { HomeComponent } from './home/home.component';
    import { AboutComponent } from './about/about.component';

    export const routes: Routes = [
        { path: "", component: HomeComponent },
        { path: "food", loadComponent: () => import('./food/food-container/food-container.component').then(m => m.FoodContainerComponent) },
        { path: "about", component: AboutComponent }
    ];
    ```

- Manually remove the following items:

    - app-routing.module.ts
    - food.module.ts
    - food-routing.module.ts    