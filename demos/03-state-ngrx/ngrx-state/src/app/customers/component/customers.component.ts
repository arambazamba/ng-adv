import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { customersActions } from '../state/customers.actions';
import { CustomersState, customerState } from '../state/customers.state';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss'],
    standalone: true,
    imports: [MatToolbar, MatToolbarRow, FormsModule, ReactiveFormsModule, AsyncPipe]
})
export class CustomersComponent implements OnInit {
  store = inject(Store<CustomersState>)
  customers = this.store.select(customerState.selectFilteredUsers);
  fcFilter = new FormControl('');

  ngOnInit(): void {
    this.store.dispatch(customersActions.loadCustomers());
    this.fcFilter.valueChanges.subscribe(value => {
      this.store.dispatch(customersActions.setFilter({ filter: value ?? '' }));
    });
  }
}
