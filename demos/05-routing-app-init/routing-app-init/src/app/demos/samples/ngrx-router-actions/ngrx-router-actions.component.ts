import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { DemoActions } from '../../state/demos.actions';
import { DemoState } from '../../state/demos.state';
import { MatButton } from '@angular/material/button';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-ngrx-router-actions',
    templateUrl: './ngrx-router-actions.component.html',
    styleUrls: ['./ngrx-router-actions.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatButton]
})
export class NgrxRouterActionsComponent {
  store = inject(Store<DemoState>) as Store<DemoState>;

  goToError() {
    this.store.dispatch(DemoActions.redirectToError());
  }

}
