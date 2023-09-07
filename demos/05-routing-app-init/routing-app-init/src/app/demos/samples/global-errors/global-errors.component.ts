import { Component } from '@angular/core';

@Component({
  selector: 'app-global-errors',
  templateUrl: './global-errors.component.html',
  styleUrls: ['./global-errors.component.scss'],
})
export class GlobalErrorsComponent {
  throwErr() {
    throw new Error('A demo error is thrown');
  }
}
