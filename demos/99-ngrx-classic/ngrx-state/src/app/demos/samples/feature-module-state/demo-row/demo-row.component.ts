import { Component, input, output } from '@angular/core';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-demo-row',
  templateUrl: './demo-row.component.html',
  styleUrls: ['./demo-row.component.scss'],
  standalone: true,
  imports: [
    MatSlideToggle,
    MatButton,
    MatIcon,
  ]
})
export class DemoRowComponent {
  readonly item = input<DemoItem>(new DemoItem());
  readonly onDelete = output<DemoItem>();
  readonly onSelect = output<DemoItem>();
  readonly onChangeVisibility = output<DemoItem>();

  delete() {
    this.onDelete.emit(this.item());
  }

  edit() {
    this.onSelect.emit(this.item());
  }

  changeVisibility() {
    let changed = { ...this.item(), visible: !this.item().visible }
    this.onChangeVisibility.emit(changed);
  }
}
