import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-popup-container',
  templateUrl: './popup-container.component.html',
  styleUrls: ['./popup-container.component.scss'],
})
export class PopupContainerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      width: '900px',
      data: { header: 'Sample Header' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
