import { Component } from '@angular/core';
import { NavItem } from './nav-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  items: NavItem[] = [
    { title: 'Home', url: '/' },
    { title: 'Products', url: '/products' },
    { title: 'About', url: '/about' },
  ];

}
