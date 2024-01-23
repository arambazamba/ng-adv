import { APP_INITIALIZER, Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  http = inject(HttpClient);

  getCustomers() {
    console.log("getCustomers");
    return this.http.get<Customer[]>(environment.api + 'customers');
  }
}
