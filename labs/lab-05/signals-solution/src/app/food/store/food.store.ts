import { patchState, signalStore, withComputed, withMethods, withState, withHooks } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { FoodItem } from '../food.model';
import { computed, inject } from '@angular/core';
import { FoodService } from '../food.service';
import { switchMap, tap } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

type FoodState = {
    food: FoodItem[];
    selectedFood: FoodItem | null;
    loading: boolean;
}

const initialState: FoodState = {
    food: [],
    selectedFood: null,
    loading: false,
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
        loadFood: rxMethod<void>(
            pipe(
                switchMap(() => {
                    patchState(store, { loading: true });
                    return service.getFood().pipe(
                        tapResponse({
                            next: (food) => patchState(store, { food }),
                            error: console.error,
                            finalize: () => patchState(store, { loading: false }),
                        })
                    );
                })
            )),
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