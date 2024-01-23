import { Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Store } from '@ngrx/store';
import { combineLatestWith, tap } from 'rxjs/operators';
import { SideNavActions } from './menu.actions';
import { MenuState } from './menu.reducer';
import {
  getSideNavEnabled,
  getSideNavPosition,
  getSideNavVisible
} from './menu.selectors';

@Injectable({
  providedIn: 'root',
})
export class MenuFacade {
  constructor(
    private breakpointObserver: BreakpointObserver,
    private store: Store<MenuState>
  ) {
    this.watchScreen.subscribe();
  }

  watchScreen = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Small])
    .pipe(
      combineLatestWith(this.sideNavEnabled),
      tap(([breakpointState, enabled]) => {
        console.log(breakpointState, enabled);
        let visible = breakpointState.matches ? false : true;
        let position = breakpointState.matches ? 'over' : 'side';
        this.store.dispatch(SideNavActions.setsidenavvisible({ visible }));
        this.store.dispatch(SideNavActions.setsidenavposition({ position }));
      })
    );

  get sideNavEnabled() {
    return this.store.select(getSideNavEnabled);
  }

  get sideNavVisible() {
    return this.store.select(getSideNavVisible);
  }

  get sideNavPosition() {
    return this.store.select(getSideNavPosition);
  }

  setSideNavEnabled(val: boolean) {
    this.store.dispatch(SideNavActions.setsidenavenabled({ enabled: val }));
  }

  adjustSidenavToScreen(mq: string): boolean {
    return mq == 'xs' ? false : true;
  }

  toggleMenuVisibility() {
    this.store.dispatch(SideNavActions.togglesidenav());
  }
}
