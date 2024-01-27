import { CdkDragDrop, moveItemInArray, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { DemoFacade } from '../../../state/demo.facade';
import { AsyncPipe } from '@angular/common';
import { DemoRowComponent } from '../demo-row/demo-row.component';
import { ColumnDirective } from '../../../../shared/formatting/formatting-directives';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-demo-list',
    templateUrl: './demo-list.component.html',
    styleUrls: ['./demo-list.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        ColumnDirective,
        DemoRowComponent,
        CdkDrag,
        AsyncPipe,
    ],
})
export class DemoListComponent {
  df = inject(DemoFacade);
  @Output() onSelectDemo: EventEmitter<null> = new EventEmitter();

  demos$ = this.df.getDemos();
  filter$ = this.df.getFilter();

  view$ = combineLatest([this.demos$, this.filter$]).pipe(
    map(([demos, filter]) => {
      return filter !== ''
        ? demos.filter((d: DemoItem) =>
          d.title.toLowerCase().includes(filter.toLowerCase())
        )
        : demos;
    })
  );

  deleteItem(item: DemoItem) {
    this.df.deleteDemo(item);
  }

  changeVisibility(item: DemoItem) {
    this.df.updateDemo(item);
  }

  selectItem(item: DemoItem) {
    this.df.selectDemo(item);
    this.onSelectDemo.emit();
  }
}
