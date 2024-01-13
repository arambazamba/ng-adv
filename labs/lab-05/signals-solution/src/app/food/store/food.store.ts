import { signalStore, withState } from '@ngrx/signals';
import { FoodItem } from '../food.model';

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