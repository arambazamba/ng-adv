import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CommentService } from '../comment.service';
import { MarkdownEditorActions } from './editor.actions';

export const loadComments$ = createEffect((actions$ = inject(Actions), service = inject(CommentService)) => {
  return actions$.pipe(
    ofType(MarkdownEditorActions.loadComments),
    mergeMap(() =>
      service.getComments().pipe(
        map((comments) =>
          MarkdownEditorActions.loadCommentsSuccess({ items: comments })
        ),
        catchError((err) => of(MarkdownEditorActions.loadCommentsFailure({ err })))
      )
    )
  )
}, { functional: true });

export const saveComment$ = createEffect((actions$ = inject(Actions), service = inject(CommentService)) => {
  return actions$.pipe(
    ofType(MarkdownEditorActions.saveComment),
    mergeMap((action) =>
      service.saveComment(action.item).pipe(
        map((comment) =>
          MarkdownEditorActions.saveCommentSuccess({ item: comment })
        ),
        catchError((err) => of(MarkdownEditorActions.saveCommentFailure({ err })))
      )
    )
  )
}, { functional: true });

export const deleteComment$ = createEffect((actions$ = inject(Actions), service = inject(CommentService)) => {
  return actions$.pipe(
    ofType(MarkdownEditorActions.deleteComment),
    mergeMap((action) =>
      service.deleteComment(action.item).pipe(
        map((comment) =>
          MarkdownEditorActions.deleteCommentSuccess({ item: comment })
        ),
        catchError((err) => of(MarkdownEditorActions.deleteCommentFailure({ err })))
      )
    )
  )
}, { functional: true });