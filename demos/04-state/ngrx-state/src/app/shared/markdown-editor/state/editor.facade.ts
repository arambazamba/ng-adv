import { DestroyRef, Injectable, OnDestroy, inject } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommentItem } from '../comment.model';
import { MarkdownEditorActions } from './editor.actions';
import { EditorState } from './editor.reducer';
import { getComments, hasLoaded } from './editor.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class EditorFacade {
  store = inject(Store) as Store<EditorState>;
  actions = inject(ActionsSubject);
  destroyRef = inject(DestroyRef);
  callCompletedSub = new Subject<boolean>();
  callCompleted$ = this.callCompletedSub.asObservable();

  constructor(
  ) {
    //Could be used to respond to effects completion to trigger an action in the UI
    //As an alternative you could also hook into the loading indicator
    this.actions
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        ofType(
          MarkdownEditorActions.saveCommentsSuccess,
          MarkdownEditorActions.saveCommentsFailure,
          MarkdownEditorActions.deleteCommentsSuccess,
          MarkdownEditorActions.deleteCommentsFailure
        )
      )
      .subscribe((data) => {
        console.log('action complete', data);
        this.callCompletedSub.next(true);
      });
  }

  init() {
    this.store.dispatch(MarkdownEditorActions.loadComments());
  }

  hasLoaded() {
    return this.store.select(hasLoaded).pipe(take(1));
  }

  getComments() {
    return this.store.select(getComments);
  }

  saveComment(item: CommentItem) {
    this.store.dispatch(MarkdownEditorActions.saveComments({ item }));
  }

  deleteComment(item: CommentItem) {
    this.store.dispatch(MarkdownEditorActions.deleteComments({ item }));
  }
}
