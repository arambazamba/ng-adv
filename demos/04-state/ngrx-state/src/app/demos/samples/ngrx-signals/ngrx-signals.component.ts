import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomersState } from '../../../customers/state/customers.reducer';
import { getCustomers } from '../../../customers/state/customers.selector';
import { CustomersActions } from 'src/app/customers/state/customers.actions';

@Component({
  selector: 'app-ngrx-signals',
  templateUrl: './ngrx-signals.component.html',
  styleUrls: ['./ngrx-signals.component.scss']
})
export class NgrxSignalsComponent {
  store = inject(Store) as Store<CustomersState>;
  customers = this.store.selectSignal(getCustomers);

  ngOnInit(): void {
    this.store.dispatch(CustomersActions.loadCustomers());
  }
}
