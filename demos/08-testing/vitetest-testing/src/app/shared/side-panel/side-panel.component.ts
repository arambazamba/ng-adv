import { Component, HostListener, inject, ChangeDetectionStrategy } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { SidebarActions } from './sidebar.actions';
import { SidePanelService } from './sidepanel.service';
import { SideNavService } from '../sidenav/sidenav.service';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { RendererStateService } from '../markdown-renderer/renderer-state.service';
import { MatTooltipModule } from '@angular/material/tooltip';



@Component({
    selector: 'app-side-panel',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-panel.component.html',
    styleUrls: ['./side-panel.component.scss'],
    imports: [
        MatToolbar,
        MatToolbarRow,
        MatMiniFabButton,
        MatIcon,
        MatTooltipModule
    ]
})
export class SidePanelComponent {
  sns = inject(SnackbarService);
  eb = inject(SidePanelService);
  rendererState = inject(RendererStateService);
  editorDisplayed = false;
  sidenav = inject(SideNavService);
  icon = "create";

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

  toggleInfo() {
    this.rendererState.toggleVisibility();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.ctrlKey && event.key === 'i') {
      this.toggleInfo();
      event.preventDefault();
    }
  }

}
