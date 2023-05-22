import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DemoItem } from '../../demo-base/demo-item.model';

@Injectable({
  providedIn: 'root',
})
export class StatefulDemoService {
  constructor(private httpClient: HttpClient) {
    this.initData();
  }

  private demos: BehaviorSubject<DemoItem[]> = new BehaviorSubject<DemoItem[]>(
    []
  );

  private initData() {
    this.httpClient
      .get<DemoItem[]>(`${environment.api}demos`)
      .subscribe((data) => {
        let trimmed = data.slice(0, 3);
        this.demos.next(trimmed);
      });
  }

  getDemos() {
    return this.demos.asObservable();
  }

  deleteDemo(item: DemoItem): Observable<any> {
    const arr = this.demos.getValue().filter((d) => d.id != item.id);
    // Emmit a marble containing the current array
    this.demos.next(arr);
    return EMPTY;
  }

  addDemo(item: DemoItem): Observable<any> {
    const arr = this.demos.getValue();
    arr.push(item);
    // Emmit a marble containing the current array
    this.demos.next(arr);
    return EMPTY;
  }
}
