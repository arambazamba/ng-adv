import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DemoItem } from '../../demo-base/demo-item.model';

@Component({
  selector: 'app-demo-row',
  templateUrl: './demo-row.component.html',
  styleUrls: ['./demo-row.component.scss'],
})
export class DemoRowComponent {
  @Input() item: DemoItem | null = null;
  @Output() onDelete: EventEmitter<DemoItem> = new EventEmitter();
  @Output() onSlide: EventEmitter<DemoItem> = new EventEmitter();

  delete() {
    if (this.item != null) this.onDelete.emit(this.item);
  }

  changeVisibility() {

    if (this.item != null) {
      this.item.visible = !this.item.visible;
      this.onSlide.emit(this.item);
    }
  }
}
