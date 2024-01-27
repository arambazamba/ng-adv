import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { DemoItem } from '../demo-base/demo-item.model';
import { demoActions } from './demos.actions';
import { DemoState, demoState, getAllDemos } from './demos.state';

@Injectable({
  providedIn: 'root',
})
export class DemoFacade {
  store = inject(Store<DemoState>)
  init() {
    this.hasLoaded().subscribe((loaded) => {
      if (!loaded) {
        this.store.dispatch(demoActions.loadDemos());
      }
    });
  }

  hasLoaded() {
    return this.store.select(demoState.selectLoaded).pipe(take(1));
  }

  getDemos() {
    return this.store.select(getAllDemos);
  }

  getSelectedDemo() {
    return this.store.select(demoState.selectSelected);
  }

  deleteDemo(item: DemoItem) {
    this.store.dispatch(demoActions.deleteDemo({ demo: item }));
  }

  addDemo(item: DemoItem) {
    this.store.dispatch(demoActions.addDemo({ demo: item }));
  }

  updateDemo(item: DemoItem) {
    this.store.dispatch(demoActions.updateDemo({ demo: item }));
  }

  selectDemo(item: DemoItem) {
    this.store.dispatch(demoActions.setSelected({ demo: item }));
  }

  setFilter(filter: string) {
    this.store.dispatch(demoActions.applyFilter({ filter }));
  }

  getFilter() {
    return this.store.select(demoState.selectFilter);
  }
}
