import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { SkillsEntityService } from './skills-entity.service';

export const skillsResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> => {
  const service = inject(SkillsEntityService);

  return service.loaded$.pipe(
    tap((loaded) => {
      if (!loaded) {
        service.getAll().subscribe(
          (skills) => service.entities$
        );
      }
    }),
    filter((loaded) => !!loaded),
    first()
  );
};