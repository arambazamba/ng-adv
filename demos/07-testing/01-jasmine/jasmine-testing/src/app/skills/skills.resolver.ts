import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { SkillsEntityService } from './skills-entity.service';

@Injectable({
  providedIn: 'root',
})
export class SkillsResolver  {
  constructor(private skillsService: SkillsEntityService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.skillsService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.skillsService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
