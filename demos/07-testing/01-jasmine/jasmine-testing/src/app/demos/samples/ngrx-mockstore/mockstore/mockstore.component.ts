import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllDemos } from '../../../state/demo.selectors';
import { DemoState } from '../../../state/demos.reducer';

@Component({
  selector: 'app-mockstore',
  templateUrl: './mockstore.component.html',
  styleUrls: ['./mockstore.component.scss']
})
export class MockstoreComponent {
  store = inject(Store<DemoState>)
  demos = this.store.select(getAllDemos);
}
