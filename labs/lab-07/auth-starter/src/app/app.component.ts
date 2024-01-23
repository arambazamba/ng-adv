import { Component } from '@angular/core';
import { MenuFacade } from './state/menu.facade';
import { AsyncPipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NavbarComponent,
        MatSidenavContainer,
        MatSidenav,
        MatSidenavContent,
        RouterOutlet,
        AsyncPipe,
    ],
})
export class AppComponent {
  title = 'Food App';

  constructor(public ms: MenuFacade) { }
}
