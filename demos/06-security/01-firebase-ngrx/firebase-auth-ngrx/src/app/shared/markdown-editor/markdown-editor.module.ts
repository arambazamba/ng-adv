import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../material.module';
import { EditorEffects } from './state/editor.effects';
import { editorFeatureKey, editorReducer } from './state/editor.reducer';
import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';
import { ColumnDirective, RowDirective } from '../formatting/formatting-directives';

const comps = [
  EditorContainerComponent,
  CommentsListComponent,
  CommentEditComponent,
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    StoreModule.forFeature(editorFeatureKey, editorReducer),
    EffectsModule.forFeature([EditorEffects]),
    ColumnDirective,
    RowDirective
  ],
})
export class MarkdownEditorModule { }
