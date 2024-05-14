import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DemoItem } from '../../demo-base/demo-item.model';

@Injectable({
  providedIn: 'root',
})
export class StatefulDemoService {
  http = inject(HttpClient);

  private demos: BehaviorSubject<DemoItem[]> = new BehaviorSubject<DemoItem[]>(
    []
  );

  constructor() {
    this.http
      .get<DemoItem[]>(`${environment.api}demos`)
      .subscribe((data) => {
        let trimmed = data.slice(0, 3);
        this.demos.next(trimmed);
      });
  }

  getDemos() {
    return this.demos.asObservable();
  }

  deleteDemo(item: DemoItem) {
    const arr = this.demos.getValue().filter((d) => d.id != item.id);
    // Emit a marble containing the current array
    this.demos.next(arr);
    return EMPTY;
  }

  addDemo(item: DemoItem) {
    const arr = this.demos.getValue();
    arr.push(item);
    // Emit a marble containing the current array
    this.demos.next(arr);
    return EMPTY;
  }
}
