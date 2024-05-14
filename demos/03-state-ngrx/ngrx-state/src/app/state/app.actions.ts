import { MatDrawerMode } from '@angular/material/sidenav';
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { appFeatureKey } from './app.state';

export const appActions = createActionGroup({
  source: appFeatureKey,
  events: {
    toggleMockAuthenticated: emptyProps(),
    toggleSideNav: emptyProps(),
    changeSideNavPosition: props<{ position: MatDrawerMode }>(),
    changeSideNavVisible: props<{ visible: boolean }>(),
  }
});