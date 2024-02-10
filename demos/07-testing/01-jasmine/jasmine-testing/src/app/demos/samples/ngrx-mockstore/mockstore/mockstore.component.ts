import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { getAllDemos } from 'src/app/demos/state/demos.state';

@Component({
  selector: 'app-mockstore',
  templateUrl: './mockstore.component.html',
  styleUrls: ['./mockstore.component.scss'],
  standalone: true,
  imports: [AsyncPipe]
})
export class MockstoreComponent {
  store = inject(Store)
  demos = this.store.select(getAllDemos);
}
