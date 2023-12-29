import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DemoItem } from './demo-item.model';

@Injectable({ providedIn: 'root' })
export class DemoService {
  httpClient = inject(HttpClient);

  getItems() {
    return this.httpClient.get<DemoItem[]>(`${environment.api}demos`);
  }

  addItem(item: DemoItem) {
    return this.httpClient.post<DemoItem>(`${environment.api}demos`, item);
  }

  updateItem(item: DemoItem) {
    return this.httpClient.put<DemoItem>(
      `${environment.api}demos/${item.id}`,
      item
    );
  }

  deleteItem(id: number) {
    return this.httpClient.delete(`${environment.api}demos/${id}`);
  }
}
