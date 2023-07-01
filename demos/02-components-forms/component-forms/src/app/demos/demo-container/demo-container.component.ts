import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';
import { SidebarActions } from 'src/app/shared/side-panel/sidebar.actions';
import { SidePanelService } from 'src/app/shared/side-panel/sidepanel.service';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../shared/loading/loading.service';
import { SideNavService } from '../../shared/sidenav/sidenav.service';
import { DemoService } from '../demo-base/demo.service';

@Component({
  selector: 'app-demo-container',
  templateUrl: './demo-container.component.html',
  styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent {
  destroyRef = inject(DestroyRef);
  router = inject(Router);
  route = inject(ActivatedRoute);
  ds = inject(DemoService);
  nav = inject(SideNavService);
  ls = inject(LoadingService);
  eb = inject(SidePanelService);

  title: string = environment.title;
  demos = this.ds.getItems();
  sidenavMode = this.nav.getSideNavPosition();
  sidenavVisible = this.nav.getSideNavVisible();
  isLoading = this.ls.getLoading().pipe(takeUntilDestroyed(this.destroyRef)).pipe(map((value) => value));

  workbenchLeftMargin = this.sidenavVisible.pipe(
    map((visible: boolean) => { return visible ? { 'margin-left': '5px' } : {} })
  );

  header = this.router.events
    .pipe(
      takeUntilDestroyed(this.destroyRef),
      filter((event) => event instanceof NavigationEnd),
      map(() => this.rootRoute(this.route)),
      filter((route: ActivatedRoute) => route.outlet === 'primary'),
      map((route: ActivatedRoute) => route.component != null
        ? `Component: ${route.component.name.substring(1)}`
        : 'Please select a demo'),
      tap((header) => console.log(header)
      ));

  showMdEditor = this.eb
    .getCommands()
    .pipe(
      map((action: SidebarActions) => (action === SidebarActions.HIDE_MARKDOWN ? false : true))
    );

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
