import { Component, inject } from '@angular/core';
import { CustomersState } from '../customers.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent {
  state = inject(Store<CustomersState>)
}
