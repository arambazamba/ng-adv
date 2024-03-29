import { Component, inject } from '@angular/core';
import { SideNavFacade } from 'src/app/state/sidenav.facade';
import { SnackbarService } from '../snackbar/snackbar.service';
import { ThemeService } from '../theme/theme.service';
import { SidebarActions } from './sidebar.actions';
import { SidePanelService } from './sidepanel.service';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';

@Component({
    selector: 'app-side-panel',
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss'],
    standalone: true,
    imports: [
        MatToolbar,
        MatToolbarRow,
        MatMiniFabButton,
        MatIcon,
    ],
})
export class SidePanelComponent {
  sns = inject(SnackbarService);
  eb = inject(SidePanelService);
  ts = inject(ThemeService);
  editorDisplayed = false;
  sidenav = inject(SideNavFacade);
  icon = "create";

  toggleTheme() {
    this.ts.toggleTheme();
  }

  toggleEditor() {
    if (this.editorDisplayed) {
      this.eb.triggerCmd(SidebarActions.HIDE_MARKDOWN);
    } else {
      this.eb.triggerCmd(SidebarActions.SHOW_MARKDOWN);
    }
    this.editorDisplayed = !this.editorDisplayed;
    this.icon = this.editorDisplayed ? "close" : "create";
  }

  toggleSideNav() {
    this.sidenav.toggleMenuVisibility();
  }

  showUpload() {
    this.sns.displayAlert('Info', 'Not implemented - just a Demo');
  }
}
