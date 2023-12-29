import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Skill } from './skill.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  http = inject(HttpClient)

  getSkills() {
    return this.http.get<Skill[]>(environment.api);
  }
}
