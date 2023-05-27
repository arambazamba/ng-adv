import { Component, inject } from '@angular/core';
import { FirebaseAuthService } from '../../firebase-auth.service';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
})
export class CurrentUserComponent {
  as = inject(FirebaseAuthService);
  currentUser = this.as.getUser();
}
