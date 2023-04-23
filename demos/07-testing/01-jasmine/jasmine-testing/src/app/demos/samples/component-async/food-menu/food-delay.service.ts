import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class FoodServiceDelay {

    constructor() { }

    getFood() {
        return of([
            { id: 1, name: 'Pad Thai', rating: 5 },
            { id: 2, name: 'Butter Chicken', rating: 5 },
            { id: 3, name: 'Cannelloni', rating: 4 },
        ]).pipe(delay(200));
    }
}
