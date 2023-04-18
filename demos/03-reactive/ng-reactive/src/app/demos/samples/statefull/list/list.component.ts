import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DemoItem } from 'src/app/demos/demo-base/demo-item.model';
import { StatefulDemoService } from '../stateful-demo.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor(private ds: StatefulDemoService) { }

  // Data Stream
  demosData$: Observable<DemoItem[]> = this.ds.getDemos();

  // Action Stream
  filter = new UntypedFormControl('');

  // Stream to bind the view to
  demos$ = combineLatest([
    this.demosData$,
    this.filter.valueChanges.pipe(startWith('')),
  ]).pipe(
    map(([demos, filter]) => {
      console.log(demos);
      return filter !== ''
        ? demos.filter((d) =>
          d.title.toLowerCase().includes(filter.toLowerCase())
        )
        : demos;
    })
  );

  drop(event: CdkDragDrop<DemoItem[]>) {
    this.demos$.subscribe((arr) => {
      moveItemInArray(arr, event.previousIndex, event.currentIndex);
      this.changeSortOrder(arr);
    });
  }

  changeSortOrder(arr: DemoItem[]) {
    let idx = 0;
    arr.forEach((item) => {
      item.sortOrder = idx;
      idx++;
    });
  }

  deleteItem(item: DemoItem) {
    // spinner show
    this.ds.deleteDemo(item).subscribe(() => {
      // spinner hide
    });
  }

  changeVisibility(item: DemoItem) {
    console.log('change visibility', item);
  }
}
