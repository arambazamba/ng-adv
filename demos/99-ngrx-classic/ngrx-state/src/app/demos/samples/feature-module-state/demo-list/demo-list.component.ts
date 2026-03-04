import { CdkDrag } from '@angular/cdk/drag-drop';
import { AsyncPipe } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ColumnDirective } from '../../../../shared/formatting/formatting-directives';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { DemoFacade } from '../../../state/demo.facade';
import { DemoRowComponent } from '../demo-row/demo-row.component';

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
    CdkDrag,
    AsyncPipe,
    DemoRowComponent
  ]
})
export class DemoListComponent {
  df = inject(DemoFacade);
  readonly onSelectDemo = output<null>();

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
    this.onSelectDemo.emit(null);
  }
}
