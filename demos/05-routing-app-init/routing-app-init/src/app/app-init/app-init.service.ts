import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { customersActions } from '../customers/state/customers.actions';

export const initFactory = (appInit: AppInitService) => {
  return () => appInit.loadData();
};

@Injectable({
  providedIn: 'root',
})
export class AppInitService {
  store = inject(Store)

  loadData() {
    this.store.dispatch(customersActions.loadCustomers());
    console.log("dispatched loadCustomers")
  }
}
