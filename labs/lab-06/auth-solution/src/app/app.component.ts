import { Component } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { AuthFacade } from './auth/state/auth.facade';
import { MenuFacade } from './state/menu.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuVisible$ = this.mf.getSideNavVisible();
  menuPosition$ = this.mf.getSideNavPosition();
  isAuthenticated: Observable<boolean> = of(false);

  constructor(public mf: MenuFacade, public auth: AuthFacade) { }

  ngOnInit() {
    this.isAuthenticated = this.auth
      .isAuthenticated()
      .pipe(tap((auth) => console.log('auth changed to authenticated: ', auth)));
  }
}
