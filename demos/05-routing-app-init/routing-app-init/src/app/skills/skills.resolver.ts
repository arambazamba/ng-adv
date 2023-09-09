import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { SkillsEntityService } from './skills-entity.service';

export const skillsResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {
  const skillsService = inject(SkillsEntityService);

  return skillsService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        skillsService.getAll();
      }
    }),
    filter((loaded) => !!loaded),
    first()
  );

};


export const skillResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {
  const skillsService = inject(SkillsEntityService);

  return skillsService.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        var skill = skillsService.getByKey(route.params['id']);
      }
    }),
    filter((loaded) => !!loaded),
    first()
  );

};