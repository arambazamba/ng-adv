import { createAction, props } from '@ngrx/store';

export const changeTitle = createAction(
  '[App] changeTitle',
  props<{ title: string }>()
);

// export enum AppActionTypes {
//   ChangeTitle = '[App] ChangeTitle',
// }

// export class ChangeTitleAction implements Action {
//   readonly type = AppActionTypes.ChangeTitle;
//   constructor(public payload: string) {}
// }

// export type AppActions = ChangeTitleAction;
