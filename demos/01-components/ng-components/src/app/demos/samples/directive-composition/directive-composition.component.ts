import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { BorderDirective, BoxedDirective } from '../../../shared/formatting/formatting-directives';

@Component({
    selector: 'app-directive-composition',
    templateUrl: './directive-composition.component.html',
    styleUrls: ['./directive-composition.component.scss'],
    imports: [
        MarkdownRendererComponent,
        BorderDirective,
        BoxedDirective
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DirectiveCompositionComponent {

}
