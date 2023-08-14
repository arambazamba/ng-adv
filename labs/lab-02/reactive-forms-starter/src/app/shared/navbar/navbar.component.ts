import { Component } from '@angular/core';
import { NavItem } from './nav-item.model';
import { RouterLink } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [MatToolbarModule, RouterLink],
})
export class NavbarComponent {

  items: NavItem[] = [
    { title: 'Home', url: '/' },
    { title: 'Products', url: '/products' },
    { title: 'About', url: '/about' },
  ];

}
