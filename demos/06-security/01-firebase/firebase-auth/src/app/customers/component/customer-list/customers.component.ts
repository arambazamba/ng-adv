import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from '../../customer.model';
import { CustomersActions } from '../../state/customers.actions';
import { CustomersState } from '../../state/customers.reducer';
import { getCustomers } from '../../state/customers.selector';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    standalone: true,
    imports: [MatButton, RouterLink]
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];

  constructor(public state: Store<CustomersState>) { }
  ngOnInit(): void {
    this.state.dispatch(CustomersActions.loadCustomers());
    this.state.select(getCustomers).subscribe((customer: Customer[]) => this.customers = customer);
  }
}
