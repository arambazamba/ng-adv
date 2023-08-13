import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const appActions = createActionGroup({
  source: 'App',
  events: {
    toggleMockAuthenticated: emptyProps(),
    toggleSideNav: emptyProps(),
    changeSideNavPosition: props<{ position: string }>(),
    changeSideNavVisible: props<{ visible: boolean }>(),
  }
});