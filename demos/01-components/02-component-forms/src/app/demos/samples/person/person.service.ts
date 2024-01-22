import { Injectable, inject } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Person } from './person.model';
import { delay } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  http = inject(HttpClient);

  getPersons() {
    return this.http.get<Person[]>(`${environment.api}persons`);
  }

  getPerson() {
    return this.http.get<Person>(`${environment.api}persons/1`);
  }

  save(form: NgForm) {
    console.log('ngForm:', form);
  }

  saveForLater(form: NgForm) {
    console.log('ngForm saved for later:', form);
    localStorage.setItem('personForm', JSON.stringify(form));
  }

  checkMailExists(email: string): Observable<boolean> {
    //Mocking Http Call to service to check weather user exists
    const exists = email === 'alexander.pajer@integrations.at';
    return of(exists).pipe(delay(2500));
  }
}
