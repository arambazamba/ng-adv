import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UxButtonComponent, UxSplitComponent } from '@nx-monorepo/ux-library';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, UxSplitComponent, UxButtonComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tutorial-app';
}
