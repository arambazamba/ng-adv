import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { customersActions } from '../state/customers.actions';
import { CustomersState, customerState } from '../state/customers.state';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { CustomersFacade } from '../state/customers.facade';
import { MatInputModule } from '@angular/material/input';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    imports: [MatToolbar, MatInputModule, MatToolbarRow, FormsModule, ReactiveFormsModule, AsyncPipe]
})
export class CustomersComponent implements OnInit {
  // store = inject(Store<CustomersState>)
  // customers = this.store.select(customerState.selectFilteredUsers);
  customerFacade = inject(CustomersFacade);
  customers = this.customerFacade.getCustomers();
  fcFilter = new FormControl('');

  ngOnInit(): void {
    // this.store.dispatch(customersActions.loadCustomers());
    this.customerFacade.loadCustomers();

    this.fcFilter.valueChanges.subscribe(value => {
      // this.store.dispatch(customersActions.setFilter({ filter: value ?? '' }));
      this.customerFacade.setFilter(value ?? '');
    });
  }
}
