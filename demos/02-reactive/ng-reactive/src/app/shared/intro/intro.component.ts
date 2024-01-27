import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { ColumnDirective, CenteredDirective } from '../formatting/formatting-directives';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatCardContent,
        ColumnDirective,
        CenteredDirective,
        MatCardActions,
        MatButton,
        RouterLink,
    ],
})
export class IntroComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() img: string = '';
}
