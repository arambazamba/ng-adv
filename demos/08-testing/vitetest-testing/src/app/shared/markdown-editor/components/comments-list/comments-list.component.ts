import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { CommentItem } from '../../comment.model';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'app-comments-list',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './comments-list.component.html',
    styleUrls: ['./comments-list.component.scss'],
    imports: [MatButton]
})
export class CommentsListComponent {
  @Input() Comments: CommentItem[] | null = null;
  @Output() onCommentEdit = new EventEmitter<CommentItem>();
  @Output() onCommentDelete = new EventEmitter<CommentItem>();

  editComment(item: CommentItem) {
    this.onCommentEdit.emit(item);
  }

  deleteComment(item: CommentItem) {
    this.onCommentDelete.emit(item);
  }
}
