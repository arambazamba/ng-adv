import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { EditorEffects } from './state/editor.effects';
import { editorFeatureKey, editorReducer } from './state/editor.reducer';
import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';


const comps = [
  EditorContainerComponent,
  CommentsListComponent,
  CommentEditComponent,
];

@NgModule({
    exports: comps,
    imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(editorFeatureKey, editorReducer),
    EffectsModule.forFeature([EditorEffects]),
    ...comps,
],
})
export class MarkdownEditorModule { }
