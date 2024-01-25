import { Component } from '@angular/core';
import { SplitComponent } from '../../projects/ux-controls/src/public-api';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SplitComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ux-lib';
}
