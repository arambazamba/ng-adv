import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../material.module';
import { EditorEffects } from './state/editor.effects';
import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';
import { ColumnDirective, RowDirective } from '../formatting/formatting-directives';
import { editorState } from './state/editor.state';

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
    StoreModule.forFeature(editorState),
    EffectsModule.forFeature([EditorEffects]),
    ColumnDirective,
    RowDirective
  ],
})
export class MarkdownEditorModule { }
