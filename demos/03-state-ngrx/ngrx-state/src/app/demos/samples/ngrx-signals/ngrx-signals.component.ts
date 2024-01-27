import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomersState, customerState } from '../../../customers/state/customers.state';
import { customersActions } from 'src/app/customers/state/customers.actions';
import { BorderDirective } from '../../../shared/formatting/formatting-directives';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-signals',
    templateUrl: './ngrx-signals.component.html',
    styleUrls: ['./ngrx-signals.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, BorderDirective]
})
export class NgrxSignalsComponent {
  store = inject(Store) as Store<CustomersState>;
  customers = this.store.selectSignal(customerState.selectCustomers);

  ngOnInit(): void {
    this.store.dispatch(customersActions.loadCustomers());
  }
}
