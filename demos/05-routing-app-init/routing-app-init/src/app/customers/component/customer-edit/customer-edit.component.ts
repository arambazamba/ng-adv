import { Component, Input, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeMap } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { customerState } from '../../state/customers.state';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss'],
  standalone: true,
  imports: [AsyncPipe, JsonPipe]
})
export class CustomerEditComponent {
  @Input({ required: true }) id: number = 0;
  @Input() readonly?: boolean;

  store = inject(Store);
  customer = this.store.select(customerState.selectCustomers).pipe(
    mergeMap(
      (customers) => customers.filter(c => c.id == this.id)
    ));
}
