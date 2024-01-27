import { Component } from '@angular/core';
import { TakeUntilDestroyedComponent } from '../take-until-destroyed/take-until-destroyed.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-unsubscribing',
    templateUrl: './unsubscribing.component.html',
    styleUrls: ['./unsubscribing.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, TakeUntilDestroyedComponent],
})
export class UnsubscribingComponent {
}
