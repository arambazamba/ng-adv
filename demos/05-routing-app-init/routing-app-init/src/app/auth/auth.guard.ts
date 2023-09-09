import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthFacade } from './state/auth.facade';
import { SnackbarService } from '../shared/snackbar/snackbar.service';

export const authGuard = () => {
  const authService = inject(AuthFacade);
  const router = inject(Router);
  const sbs = inject(SnackbarService);
  return authService.isAuthenticated().pipe(
    tap((authenticated) => {
      if (!authenticated) {
        sbs.displayAlert('Warning', 'You must be logged in to access this page');
        router.navigate(['/sign-in/']);
      }
    })
  );
};