import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { customersActions } from 'src/app/customers/state/customers.actions';
import { CustomersState, customerState } from 'src/app/customers/state/customers.state';
import { BorderDirective } from 'src/app/shared/formatting/formatting-directives';
import { MarkdownRendererModule } from 'src/app/shared/markdown-renderer/markdown-renderer.module';

@Component({
  selector: 'app-select-signal',
  standalone: true,
  imports: [MarkdownRendererModule, BorderDirective],
  templateUrl: './select-signal.component.html',
  styleUrl: './select-signal.component.scss'
})
export class SelectSignalComponent {
  store = inject(Store) as Store<CustomersState>;
  customers = this.store.selectSignal(customerState.selectCustomers);

  ngOnInit(): void {
    this.store.dispatch(customersActions.loadCustomers());
  }
}
