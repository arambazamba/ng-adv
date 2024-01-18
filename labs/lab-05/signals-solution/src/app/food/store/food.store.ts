import { patchState, signalStore, withComputed, withMethods, withState, withHooks } from '@ngrx/signals';
import { FoodItem } from '../food.model';
import { computed, inject } from '@angular/core';
import { FoodService } from '../food.service';

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
    withComputed((store) => ({
        count: computed(() => store.food().length),
    })),
    withMethods((store, service = inject(FoodService)) => ({
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
        loadFood: () => {
            service.getFood().subscribe((items) => {
                console.log('items from load', items);
                patchState(store, { food: items })
            })
        },
        clearSelected() {
            patchState(store, { selectedFood: null })
        }
    })),
    withHooks({
        onInit({ loadFood }) {
            loadFood();
        },
    })
)