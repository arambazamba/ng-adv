import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DemoItem } from './demo-item.model';

@Injectable({ providedIn: 'root' })
export class DemoService {
  http = inject(HttpClient);

  getItems(): Observable<DemoItem[]> {
    return this.http.get<DemoItem[]>(`${environment.api}demos`).pipe(
      catchError(this.errHandler)
    );;
  }

  addItem(item: DemoItem): Observable<DemoItem> {
    return this.http.post<DemoItem>(`${environment.api}demos`, item).pipe(
      catchError(this.errHandler)
    );
  }

  updateItem(item: DemoItem): Observable<DemoItem> {
    return this.http.put<DemoItem>(
      `${environment.api}demos/${item.id}`,
      item
    ).pipe(
      catchError(this.errHandler)
    );;
  }

  deleteItem(id: number): Observable<any> {
    return this.http.delete(`${environment.api}demos/${id}`).pipe(
      catchError(this.errHandler)
    );
  }

  errHandler(err: HttpErrorResponse): Observable<never> {
    let msg = 'Error: Could not retrieve / update demo data:' + err.error.message;
    console.error(msg);
    return throwError(() => new Error(msg))
  }
}
