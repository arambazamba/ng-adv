import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';
import { AuthFacade } from 'src/app/auth/state/auth.facade';

export const onlyAuthenticatedGuard = () => {
  const as = inject(AuthFacade);
  const sns = inject(SnackbarService);
  return as.isAuthenticated().pipe(
    tap((authenticated) => {
      if (!authenticated) {
        sns.displayAlert('No Access', 'Access only for authenticated users');
      }
    })
  );
}; 