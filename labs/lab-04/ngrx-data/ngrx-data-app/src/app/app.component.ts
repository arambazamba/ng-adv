import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/components/skills.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [SkillsComponent, RouterOutlet]
})
export class AppComponent {
  title = 'ngrx-data-simple';
}
