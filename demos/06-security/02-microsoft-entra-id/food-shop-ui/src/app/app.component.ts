import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { Component, OnDestroy } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
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
export class AppComponent implements OnDestroy {
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

  private destroy$ = new Subject();

  constructor(
    private af: MsalAuthFacade,
    public mf: MenuFacade,
    private router: Router,
    private windowRef: SSRWindow,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
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
      .pipe(takeUntil(this.destroy$))
      .subscribe((mode: string) => {
        this.sidenavMode = mode as MatDrawerMode;
      });
  }

  routeToFood() {
    if (this.authEnabled === false) {
      this.router.navigate(['food']);
    }
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  getWorbenchStyle() {
    let result = {};
    this.mf.sideNavVisible
      .pipe(takeUntil(this.destroy$))
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
