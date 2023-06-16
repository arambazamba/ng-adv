import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Skill } from './skill.model';
import { SkillsEntityService } from './skills-entity.service';

@Injectable({
  providedIn: 'root',
})
export class SkillResolver  {
  constructor(private service: SkillsEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Skill | undefined | Observable<Skill | undefined> | Promise<Skill> {
    const id = +route.params['id'];
    return this.service.getByKey(id);
  }
}
