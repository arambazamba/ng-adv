import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommentItem } from '../../comment.model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
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
