import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CustomersService } from './customers.service';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from '../shared/snackbar/snackbar.service';
import { of } from 'rxjs';
import { inject } from '@angular/core';
import { CustomersState } from '../customers/state/customers.reducer';
import { Store } from '@ngrx/store';
import { CustomersActions } from '../customers/state/customers.actions';

export const initFactory = (appinit: AppInitService) => {
  return () => appinit.loadData();
};

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  constructor(private http: HttpClient, private sbs: SnackbarService) { }
  store = inject(Store<CustomersState>)

  loadData() {
    this.store.dispatch(CustomersActions.loadcustomers());
  }
}
