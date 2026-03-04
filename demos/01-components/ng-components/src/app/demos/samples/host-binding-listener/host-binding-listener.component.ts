import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HoverListenerDirective } from './hover-listener.directive';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { BindingComponent } from './binding/binding.component';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-host-binding-listener',
    templateUrl: './host-binding-listener.component.html',
    styleUrls: ['./host-binding-listener.component.scss'],
    imports: [
        MarkdownRendererComponent,
        BindingComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        HoverListenerDirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HostBindingListenerComponent { }
