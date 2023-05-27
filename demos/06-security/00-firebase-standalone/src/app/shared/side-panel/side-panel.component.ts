import { Component, inject } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';
import { ThemeService } from '../theme/theme.service';
import { SidebarActions } from './sidebar.actions';
import { SidePanelService } from './sidepanel.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class SidePanelComponent {
  sns: SnackbarService = inject(SnackbarService);
  eb: SidePanelService = inject(SidePanelService);
  ts: ThemeService = inject(ThemeService);
  editorDisplayed: boolean = false;

  toggleTheme() {
    this.ts.toggleTheme();
  }

  toggleEditor() {
    this.editorDisplayed = !this.editorDisplayed;
    this.eb.triggerCmd(
      this.editorDisplayed
        ? SidebarActions.SHOW_MARKDOWN
        : SidebarActions.HIDE_MARKDOWN
    );
    this.editorDisplayed = !this.editorDisplayed;
  }

  showUpload() {
    this.sns.displayAlert('Info', 'Not implemented - just a Demo');
  }
}
