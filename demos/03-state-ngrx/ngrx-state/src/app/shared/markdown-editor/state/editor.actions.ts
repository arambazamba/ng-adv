import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CommentItem } from '../comment.model';

export const MarkdownEditorActions = createActionGroup({
  source: 'MarkdownEditor',
  events: {
    loadComments: emptyProps(),
    loadCommentsSuccess: props<{ items: CommentItem[] }>(),
    loadCommentsFailure: props<{ err: Error }>(),
    saveComment: props<{ item: CommentItem }>(),
    saveCommentSuccess: props<{ item: CommentItem }>(),
    saveCommentFailure: props<{ err: Error }>(),
    deleteComment: props<{ item: CommentItem }>(),
    deleteCommentSuccess: props<{ item: CommentItem }>(),
    deleteCommentFailure: props<{ err: Error }>(),
  },
});
