import { isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, Inject, PLATFORM_ID, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { MsalAuthFacade } from './auth/state/auth.facade';
import { SSRWindow } from './common/ssr-window/ssr-window.service';
import { MenuFacade } from './state/menu/menu.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  af = inject(MsalAuthFacade);
  mf = inject(MenuFacade);
  router = inject(Router);
  destroyRef = inject(DestroyRef);
  windowRef = inject(SSRWindow);
  title = environment.title;
  sidenavMode: MatDrawerMode = 'side';
  sidenavVisible = this.mf.sideNavVisible;
  isIframe = false;

  authEnabled = environment.authEnabled;
  authenticated = this.af.isAuthenticated();

  publicRoute = this.router.events.pipe(
    startWith(false),
    filter((e) => e instanceof NavigationEnd),
    map((event) => {
      return event instanceof NavigationEnd && (event as NavigationEnd).url.includes('about');
    }),
    tap((result) => {
      console.log('publicRoute', result);
    })
  );

  constructor(@Inject(PLATFORM_ID) private platformId: any,) {
    this.setSidenav();
    this.routeToFood();
    this.setMSALIframe();
  }

  setMSALIframe() {
    console.log('setMSALIframe', this.isIframe);
    if (isPlatformBrowser(this.platformId)) {
      // Use the window reference: this.windowRef
      this.isIframe = window !== window.parent && !window.opener
    }
  }

  setSidenav() {
    this.mf.sideNavPosition
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((mode: string) => {
        this.sidenavMode = mode as MatDrawerMode;
      });
  }

  routeToFood() {
    if (this.authEnabled === false) {
      this.router.navigate(['food']);
    }
  }

  getWorbenchStyle() {
    let result = {};
    this.mf.sideNavVisible
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((visible: boolean) => {
        result = visible
          ? {
            'padding-left': '10px',
          }
          : {};
      });
    return result;
  }
}
