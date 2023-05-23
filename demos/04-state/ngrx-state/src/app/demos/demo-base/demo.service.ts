import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DemoItem } from './demo-item.model';

@Injectable({ providedIn: 'root' })
export class DemoService {
  http = inject(HttpClient);

  getItems(): Observable<DemoItem[]> {
    return this.http.get<DemoItem[]>(`${environment.apiUrl}demos`);
  }

  addItem(item: DemoItem): Observable<DemoItem> {
    return this.http.post<DemoItem>(`${environment.apiUrl}demos`, item);
  }

  updateItem(item: DemoItem): Observable<DemoItem> {
    return this.http.put<DemoItem>(
      `${environment.apiUrl}demos/${item.id}`,
      item
    );
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}demos/${id}`);
  }
}
