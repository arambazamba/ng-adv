import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';
import { MockAuthService } from './mock-auth.service';

export const onlyAuthenticatedGuard = () => {
  const as = inject(MockAuthService);
  const sns = inject(SnackbarService);
  return as.isLoggedIn().pipe(
    tap((authenticated) => {
      if (!authenticated) {
        sns.displayAlert('No Access', 'Access only for authenticated users');
      }
    })
  );
}; 