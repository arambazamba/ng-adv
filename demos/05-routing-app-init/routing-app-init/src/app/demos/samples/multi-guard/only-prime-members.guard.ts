import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SnackbarService } from '../../../shared/snackbar/snackbar.service';
import { MockAuthService } from './mock-auth.service';

export const onlyPrimeMembersGuard = () => {
  const as = inject(MockAuthService);
  const sns = inject(SnackbarService);
  return as.hasPrimeSubscription().pipe(
    tap((hasSubscription) => {
      if (!hasSubscription) {
        sns.displayAlert('No Access', 'Access only for prime members');
      }
    })
  );
}
