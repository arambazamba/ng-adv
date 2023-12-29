
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoxedDirective } from './shared/formatting/formatting-directives';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, BoxedDirective, SidebarComponent],
})
export class AppComponent {
  title = 'Standalone Components Skills App';
}
