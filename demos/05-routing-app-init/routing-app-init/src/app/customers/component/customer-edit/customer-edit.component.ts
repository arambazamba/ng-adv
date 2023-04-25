import { Component, Input, OnInit, inject } from '@angular/core';
import { State } from '@ngrx/store';
import { CustomersState } from '../../state/customers.reducer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  @Input() id?: string;
  @Input() readonly?: boolean;
  state = inject(State<CustomersState>);

  ngOnInit(): void {

  }
}
