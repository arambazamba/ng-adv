import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  http = inject(HttpClient)

  getSkills() {
    return this.http.get<Skill[]>('assets/skills.json');
  }
}
