import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { demoActions } from '../../state/demos.actions';
import { DemoState } from '../../state/demos.state';
import { BoxedDirective } from 'src/app/shared/formatting/formatting-directives';

@Component({
  selector: 'app-ngrx-router-actions',
  templateUrl: './ngrx-router-actions.component.html',
  styleUrls: ['./ngrx-router-actions.component.scss'],
  standalone: true,
  imports: [MarkdownRendererComponent, MatButton, BoxedDirective]
})
export class NgrxRouterActionsComponent {
  store = inject(Store<DemoState>) as Store<DemoState>;

  goToError() {
    this.store.dispatch(demoActions.redirectToError());
  }
}
