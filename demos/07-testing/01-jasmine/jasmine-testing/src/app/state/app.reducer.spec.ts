import { appActions } from './app.actions';
import { initialAppState, appState } from './app.state';

describe('App Reducer', () => {
  it('should return the initial state', () => {
    const action = { type: 'NOOP' } as any;
    const result = appState.reducer(initialAppState, action);
    expect(result).toBe(initialAppState);
  });

  it('should toggle the side nav visible flag', () => {
    const action = appActions.toggleSideNav();
    const result = appState.reducer(initialAppState, action);
    expect(result.sideNavVisible).toEqual(false);
  });

  it('should change the side nav visible flag', () => {
    const action = appActions.changeSideNavVisible({ visible: false });
    const result = appState.reducer(initialAppState, action);
    expect(result.sideNavVisible).toEqual(false);
  });

  it('should change the side nav position', () => {
    const action = appActions.changeSideNavPosition({ position: 'over' });
    const result = appState.reducer(initialAppState, action);
    expect(result.sideNavPosition).toEqual('over');
  });
});
