import { Component, Input } from '@angular/core';
import { CommentItem } from '../../comment.model';

@Component({
  selector: 'app-comment-edit',
  templateUrl: './comment-edit.component.html',
  styleUrls: ['./comment-edit.component.scss'],
})
export class CommentEditComponent {
  @Input() comment: CommentItem = new CommentItem();
}
