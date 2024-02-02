import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { SkillsComponent } from './app/skills/skills.component';

bootstrapApplication(SkillsComponent, appConfig)
  .catch((err) => console.error(err));
