import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodContainerComponent } from './food-container/food-container.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodRoutingModule } from './food-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    CommonModule,
    FoodRoutingModule,
    ReactiveFormsModule,
    FoodContainerComponent, FoodListComponent, FoodEditComponent
]
})
export class FoodModule { }
