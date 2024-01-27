import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [NavbarComponent, RouterOutlet],
})
export class AppComponent {

  constructor() {
    console.log('AppComponent constructor');
  }

  title: string = environment.title;
  selectedTheme: string = 'default';

  toggleTheme() {
    this.selectedTheme = this.selectedTheme == 'default' ? 'dark' : 'default';
    console.log(this.selectedTheme);
  }
}
