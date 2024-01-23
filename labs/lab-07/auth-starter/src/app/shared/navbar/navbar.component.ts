import { Component, OnInit } from '@angular/core';
import { MenuFacade } from '../../state/menu.facade';
import { NavItem } from './navItem';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    standalone: true,
    imports: [
        MatToolbar,
        MatToolbarRow,
        MatIcon,
        RouterLink,
    ],
})
export class NavbarComponent implements OnInit {
  constructor(private ms: MenuFacade) { }

  items: NavItem[];

  ngOnInit() {
    this.items = [
      { title: 'Home', url: '/' },
      { title: 'Products', url: '/products' },
      { title: 'About', url: '/about' },
    ];
  }

  toggleMenu() {
    this.ms.toggleMenuVisibility();
  }
}
