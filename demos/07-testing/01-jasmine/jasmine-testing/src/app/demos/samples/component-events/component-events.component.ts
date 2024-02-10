import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ColumnDirective } from '../../../shared/formatting/formatting-directives';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-component-events',
    templateUrl: './component-events.component.html',
    styleUrls: ['./component-events.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        ColumnDirective,
        MatButton,
    ],
})
export class ComponentEventsComponent {
  count = 0;

  incrementCount() {
    this.count += 1;
  }
}
