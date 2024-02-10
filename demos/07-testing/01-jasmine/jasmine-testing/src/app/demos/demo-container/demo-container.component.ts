import { Component, OnInit, effect, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { SidebarActions } from 'src/app/shared/side-panel/sidebar.actions';
import { SidePanelService } from 'src/app/shared/side-panel/sidepanel.service';
import { SideNavService } from 'src/app/shared/sidenav/sidenav.service';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../../shared/loading/loading.service';
import { DemoFacade } from '../state/demo.facade';
import { SidePanelComponent } from '../../shared/side-panel/side-panel.component';
import { EditorContainerComponent } from '../../shared/markdown-editor/components/editor-container/editor-container.component';
import { LoadingComponent } from '../../shared/loading/loading.component';
import { NgStyle, AsyncPipe } from '@angular/common';
import { MatNavList, MatListItem } from '@angular/material/list';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatSidenavContainer, MatSidenav, MatSidenavContent } from '@angular/material/sidenav';

@Component({
    selector: 'app-demo-container',
    templateUrl: './demo-container.component.html',
    styleUrls: ['./demo-container.component.scss'],
    standalone: true,
    imports: [
        MatSidenavContainer,
        MatSidenav,
        MatToolbar,
        MatToolbarRow,
        MatNavList,
        MatListItem,
        RouterLink,
        MatSidenavContent,
        NgStyle,
        LoadingComponent,
        RouterOutlet,
        EditorContainerComponent,
        SidePanelComponent,
        AsyncPipe,
    ],
})
export class DemoContainerComponent implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  df = inject(DemoFacade);
  nav = inject(SideNavService);
  ls = inject(LoadingService);
  eb = inject(SidePanelService);

  destroy$ = new Subject();
  title: string = environment.title;
  header = 'Please select a demo';
  demos = this.df.getDemos();

  isLoading = false;

  sidenavMode = this.nav.getSideNavPosition();
  sidenavVisible = this.nav.getSideNavVisible();
  workbenchMargin = this.sidenavVisible.pipe(
    map(visible => { return visible ? { 'margin-left': '5px' } : {} })
  );

  currentCMD = this.eb.getCommands();
  showMdEditor: boolean = false;

  constructor() {
    effect(() => {
      this.showMdEditor = this.currentCMD() === SidebarActions.HIDE_MARKDOWN ? false : true;
    });

    this.ls.getLoading().pipe(takeUntil(this.destroy$)).subscribe((value) => {
      Promise.resolve(null).then(() => (this.isLoading = value));
    });
  }

  ngOnInit() {
    this.df.init();
    this.setComponentMetadata();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  rootRoute(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }

  setComponentMetadata() {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
        filter((event) => event instanceof NavigationEnd),
        map(() => this.rootRoute(this.route)),
        filter((route: ActivatedRoute) => route.outlet === 'primary')
      )
      .subscribe((route: ActivatedRoute) => {
        this.header =
          route.component != null
            ? `Component: ${route.component
              .toString()
              .substring(7, route.component.toString().indexOf('{') - 1)}`
            : '';
      });
  }
}
