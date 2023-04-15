import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SkillBS } from './skills-bs';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private httpClient: HttpClient) { }

  getSkills() {
    return this.httpClient.get<SkillBS[]>(`${environment.apiUrl}skills`)
  }

  getSkill(id: number): Observable<SkillBS> {
    return this.httpClient.get<SkillBS>(`${environment.apiUrl}skills${id}`);
  }

  insertSkill(skill: SkillBS) {
    return this.httpClient.post<SkillBS>(`${environment.apiUrl}skills`, skill);
  }

  updateSkill(skill: SkillBS) {
    return this.httpClient.put<SkillBS>(`${environment.apiUrl}skills`, skill);
  }

  deleteSkill(id: number) {
    return this.httpClient.delete(`${environment.apiUrl}skills/${id}`);
  }
}
