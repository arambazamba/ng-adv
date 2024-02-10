import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { getAllDemos } from 'src/app/demos/state/demos.state';

@Component({
  selector: 'app-selectors',
  templateUrl: './selectors.component.html',
  styleUrls: ['./selectors.component.scss'],
  standalone: true,
  imports: [AsyncPipe]
})
export class SelectorsComponent {
  store = inject(Store);
  demos = this.store.select(getAllDemos);
}
