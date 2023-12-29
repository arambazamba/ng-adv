import { DestroyRef, Injectable, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommentItem } from '../comment.model';
import { MarkdownEditorActions } from './editor.actions';
import { EditorState, editorState } from './editor.state';

@Injectable({
  providedIn: 'root',
})
export class EditorFacade {
  store = inject(Store) as Store<EditorState>;
  actions = inject(ActionsSubject);
  destroyRef = inject(DestroyRef);
  effectCompleted = new Subject<boolean>();
  effectCompleted$ = this.effectCompleted.asObservable();

  constructor() {
    this.actions.pipe(
      takeUntilDestroyed(this.destroyRef),
      ofType(
        MarkdownEditorActions.saveCommentSuccess,
        MarkdownEditorActions.saveCommentFailure,
        MarkdownEditorActions.deleteCommentSuccess,
        MarkdownEditorActions.deleteCommentFailure
      )
    ).subscribe(() => {
      this.effectCompleted.next(true);
    });
  }

  init() {
    this.store.dispatch(MarkdownEditorActions.loadComments());
  }

  hasLoaded() {
    return this.store.select(editorState.selectLoaded).pipe(take(1));
  }

  getComments() {
    return this.store.select(editorState.selectComments);
  }

  saveComment(item: CommentItem) {
    this.store.dispatch(MarkdownEditorActions.saveComment({ item }));
  }

  deleteComment(item: CommentItem) {
    this.store.dispatch(MarkdownEditorActions.deleteComment({ item }));
  }
}
