import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { DemoItem } from '../../demo-container/demo-item.model';

@Injectable({
  providedIn: 'root',
})
export class StatefulDemoService {
  private readonly sampleDemos: DemoItem[] = [
    { id: 1, title: 'Observable Basics', url: 'observable-basics', teaches: 'Observable fundamentals', sortOrder: 1, topic: 'Basics', visible: true, md: '' },
    { id: 2, title: 'Subject & Behavior', url: 'subject-behavior', teaches: 'Subjects and behaviors', sortOrder: 2, topic: 'Basics', visible: true, md: '' },
    { id: 3, title: 'Operators', url: 'operators', teaches: 'RxJS operators', sortOrder: 3, topic: 'Operators', visible: true, md: '' },
  ];

  private demos: BehaviorSubject<DemoItem[]> = new BehaviorSubject<DemoItem[]>(
    this.sampleDemos
  );

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
