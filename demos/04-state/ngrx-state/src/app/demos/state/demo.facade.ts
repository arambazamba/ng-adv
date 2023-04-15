import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { DemoItem } from '../demo-base/demo-item.model';
import { getAllDemos, getFilter, getSelected, hasLoaded } from './demo.selectors';
import {
  addDemo,
  applyFilter,
  deleteDemo,
  loadDemos,
  setSelected,
  toggleVisiblity,
  updateDemo,
} from './demos.actions';
import { DemoState } from './demos.reducer';

@Injectable({
  providedIn: 'root',
})
export class DemoFacade {
  constructor(private store: Store<DemoState>) { }

  init() {
    this.hasLoaded().subscribe((loaded) => {
      if (!loaded) {
        this.store.dispatch(loadDemos());
      }
    });
  }

  hasLoaded() {
    return this.store.select(hasLoaded).pipe(take(1));
  }

  getDemos() {
    return this.store.select(getAllDemos)
  }

  getSelectedDemo() {
    return this.store.select(getSelected);
  }

  deleteDemo(item: DemoItem) {
    this.store.dispatch(deleteDemo({ item }));
  }

  addDemo(item: DemoItem) {
    this.store.dispatch(addDemo({ item }));
  }

  updateDemo(item: DemoItem) {
    this.store.dispatch(updateDemo({ item }));
  }

  selectDemo(item: DemoItem) {
    this.store.dispatch(setSelected({ item }));
  }

  changeVisibility(item: DemoItem) {
    this.store.dispatch(toggleVisiblity({ item }));
  }

  setFilter(filter: string) {
    this.store.dispatch(applyFilter({ filter }));
  }

  getFilter() {
    return this.store.select(getFilter);
  }
}
