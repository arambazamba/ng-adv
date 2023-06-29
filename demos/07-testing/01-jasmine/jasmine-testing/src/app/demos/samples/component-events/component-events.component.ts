import { Component } from '@angular/core';

@Component({
  selector: 'app-component-events',
  templateUrl: './component-events.component.html',
  styleUrls: ['./component-events.component.scss'],
})
export class ComponentEventsComponent {
  count = 0;

  incrementCount() {
    this.count += 1;
  }
}
