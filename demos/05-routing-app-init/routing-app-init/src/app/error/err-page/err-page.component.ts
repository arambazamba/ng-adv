import { Component } from '@angular/core';

// ambient declaration for window
declare var window: Window;

@Component({
  selector: 'app-err-page',
  templateUrl: './err-page.component.html',
  styleUrls: ['./err-page.component.scss'],
})
export class ErrPageComponent {
  error = window.history.state;
}
