import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomersActions } from '../state/customers.actions';
import { CustomersState, customerState } from '../state/customers.state';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  store = inject(Store<CustomersState>)
  customers = this.store.select(customerState.selectCustomers);

  ngOnInit(): void {
    this.store.dispatch(CustomersActions.loadCustomers());
  }
}
