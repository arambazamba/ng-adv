import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs';
import { CustomersState } from '../../state/customers.reducer';
import { getCustomers } from '../../state/customers.selector';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-customer-edit',
    templateUrl: './customer-edit.component.html',
    styleUrls: ['./customer-edit.component.scss'],
    standalone: true,
    imports: [AsyncPipe, JsonPipe]
})
export class CustomerEditComponent {
  @Input() id?: number;
  @Input() readonly?: boolean;
  store = inject(Store<CustomersState>) as Store<CustomersState>;
  customer = this.store.select(getCustomers).pipe(
    mergeMap(
      (customers) => customers.filter(c => c.id == this.id)
    ));
}
