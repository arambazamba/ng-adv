import { Component, inject } from '@angular/core';
import { SideNavService } from './sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Food App';
  nav = inject(SideNavService);
}
