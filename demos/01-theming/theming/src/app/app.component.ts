import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleService = inject(Title);
  title: string = environment.title;
  selectedTheme: string = 'default';

  ngOnInit() {
    this.titleService.setTitle(this.title);
  }
}
