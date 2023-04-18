import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomersState } from '../state/customers.reducer';
import { getCustomers } from '../state/customers.selector';
import { Customer } from '../customer.model';
import { loadCustomers } from '../state/customers.actions';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private state: Store<CustomersState>) { }
  ngOnInit(): void {
    this.state.dispatch(loadCustomers());
    this.state.select(getCustomers).subscribe((customer: Customer[]) => this.customers = customer);
  }


}
