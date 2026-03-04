import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CommentItem } from './comment.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  http = inject(HttpClient);
  url = environment.api + 'comments';

  saveComment(item: CommentItem) {
    if (item.id === undefined || item.id === 0) {
      return this.http.post<CommentItem>(this.url, item);
    } else {
      return this.http.put<CommentItem>(`${this.url}/${item.id}`, item);
    }
  }

  deleteComment(item: CommentItem) {
    return this.http.delete<CommentItem>(`${this.url}/${item.id}`);
  }

  getComments() {
    return this.http.get<CommentItem[]>(this.url);
  }

  getComment(id: number) {
    return this.http.get<CommentItem>(`${this.url}/${id}`);
  }
}
