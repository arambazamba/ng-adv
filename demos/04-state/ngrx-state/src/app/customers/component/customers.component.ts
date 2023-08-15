import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomersActions } from '../state/customers.actions';
import { CustomersState, customerState } from '../state/customers.state';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  store = inject(Store<CustomersState>)
  customers = this.store.select(customerState.selectFilteredUsers);
  fcFilter = new FormControl('');

  ngOnInit(): void {
    this.store.dispatch(CustomersActions.loadCustomers());
    this.fcFilter.valueChanges.subscribe(value => {
      this.store.dispatch(CustomersActions.setFilter({ filter: value ?? '' }));
    });
  }
}
