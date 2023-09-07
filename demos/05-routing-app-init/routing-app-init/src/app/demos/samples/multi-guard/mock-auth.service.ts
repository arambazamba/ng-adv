import { Injectable, inject } from '@angular/core';
import { AppFacade } from '../../../state/app.facade';

@Injectable({
  providedIn: 'root',
})
export class MockAuthService {
  af = inject(AppFacade);

  isLoggedIn() {
    return this.af.getIsLoggedIn();
  }
  hasPrimeSubscription() {
    return this.af.getPrimeMember();
  }
}
