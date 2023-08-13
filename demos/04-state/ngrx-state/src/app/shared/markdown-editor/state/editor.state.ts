import { createFeature, createReducer, on } from '@ngrx/store';
import { CommentItem } from '../comment.model';
import { MarkdownEditorActions } from './editor.actions';

export interface EditorState {
  comments: CommentItem[];
  loaded: boolean;
}

export const initialEditorState: EditorState = {
  comments: [],
  loaded: false,
};

// Reducer
export const editorState = createFeature({
  name: 'editor',
  reducer: createReducer(
    initialEditorState,
    on(MarkdownEditorActions.loadCommentsSuccess, (state, action) => {
      return { ...state, comments: action.items, loaded: true };
    }),
    on(MarkdownEditorActions.saveCommentsSuccess, (state, action) => {
      //Notice to clone an Array we use [] instead of {}
      const clone = Object.assign([], state.comments) as Array<CommentItem>;
      let idx = clone.findIndex((c) => c.id == action.item.id);
      if (idx > -1) {
        clone[idx] = action.item;
      } else {
        clone.push(action.item);
      }
      return { ...state, comments: clone };
    }),
    on(MarkdownEditorActions.deleteCommentsSuccess, (state, action) => {
      const clone = Object.assign(
        [],
        state.comments.filter((c) => c.id != action.item.id)
      ) as Array<CommentItem>;
      return { ...state, comments: clone };
    }),
    on(
      MarkdownEditorActions.loadCommentsFailure,
      MarkdownEditorActions.saveCommentsFailure,
      MarkdownEditorActions.deleteCommentsFailure,
      (state, action) => {
        return { ...state };
      }
    )
  )
})