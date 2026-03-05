import { Injectable } from '@angular/core';
import { interval, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private persons = ['Cleo', 'Giro', 'Soi', 'Flora']

  getPersons() {
    return interval(350).pipe(
      take(4),
      switchMap(i => of(this.persons[i]))
    )
  }
}
