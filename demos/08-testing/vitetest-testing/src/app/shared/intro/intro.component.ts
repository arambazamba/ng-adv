import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-intro',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './intro.component.html',
    styleUrls: ['./intro.component.scss'],
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardSubtitle,
        MatCardContent,
        MatCardActions,
        MatButton,
        RouterLink,
    ]
})
export class IntroComponent {
  title = input.required<string>();
  img = input.required<string>();
  subtitle = input<string>('');
}
