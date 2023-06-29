import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemoState } from '../../../state/demos.reducer';
import { getVisibleDemos } from '../../../state/demo.selectors';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss']
})
export class SelectorsComponent {
  store = inject(Store<DemoState>)
  demos = this.store.select(getVisibleDemos);
}
