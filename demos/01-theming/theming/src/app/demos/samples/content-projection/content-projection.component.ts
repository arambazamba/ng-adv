import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SplitSampleComponent } from './split-sample/split-sample.component';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss'],
})
export class ContentProjectionComponent {
  dialog = inject(MatDialog);

  openPopup(): void {
    const dialogRef = this.dialog.open(SplitSampleComponent, {
      width: '70vw',
      data: { main: 'this is main', toolbar: 'toolbar' },
    });
  }
}
