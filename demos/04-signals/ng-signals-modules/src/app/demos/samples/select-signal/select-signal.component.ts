import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { CustomersActions } from 'src/app/customers/state/customers.actions';
import { CustomersState, customerState } from 'src/app/customers/state/customers.state';
import { FormattingModule } from 'src/app/shared/formatting/formatting.module';
import { MarkdownRendererModule } from 'src/app/shared/markdown-renderer/markdown-renderer.module';

@Component({
  selector: 'app-select-signal',
  standalone: true,
  imports: [MarkdownRendererModule, FormattingModule],
  templateUrl: './select-signal.component.html',
  styleUrl: './select-signal.component.scss'
})
export class SelectSignalComponent {
  store = inject(Store) as Store<CustomersState>;
  customers = this.store.selectSignal(customerState.selectCustomers);

  ngOnInit(): void {
    this.store.dispatch(CustomersActions.loadCustomers());
  }
}
