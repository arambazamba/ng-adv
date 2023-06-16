import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { setSelected, applyFilter, toggleVisiblity } from './demos.actions';
import { DemoItem } from '../demo-base/demo-item.model';
import {
  deleteDemoSuccess,
  loadDemosFailure,
  loadDemosSuccess,
} from './demos.actions';

// State
export const demosFeatureKey = 'demos';

// internal entity structure
// interface EntityState<T> {
//   ids: string[];
//   entities: { [id: string]: T };
// }

export interface DemoState extends EntityState<DemoItem> {
  selected: DemoItem;
  filter: string;
}

export const demosAdapter: EntityAdapter<DemoItem> =
  createEntityAdapter<DemoItem>();

export const defaultDemoItemState: DemoState = {
  ids: [],
  entities: {},
  filter: '',
  selected: {
    id: 0,
    title: '',
    sortOrder: 0,
    visible: true,
    url: '',
  },
};

export const initialState = demosAdapter.getInitialState(defaultDemoItemState);

// Reducer
export const demoReducer = createReducer(
  initialState,
  on(loadDemosSuccess, (state, action) => {
    return demosAdapter.setAll(action.items, {
      ...state,
    });
  }),
  on(loadDemosFailure, (state, action) => {
    return { ...state };
  }),
  on(deleteDemoSuccess, (state, action) => {
    return demosAdapter.removeOne(action.item.id, {
      ...state,
    });
  }),
  on(loadDemosFailure, (state, action) => {
    return { ...state };
  }),
  on(setSelected, (state, action) => {
    return { ...state, selected: action.item };
  }),
  on(applyFilter, (state, action) => {
    return { ...state, filter: action.filter };
  }),
  on(toggleVisiblity, (state, action) => {
    const item: Update<DemoItem> = {
      id: action.item.id,
      changes: { visible: action.item.visible },
    };
    return demosAdapter.updateOne(item, { ...state });
  })
);
