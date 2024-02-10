import { Component } from '@angular/core';
import { User } from './user-model';
import { usersdata } from './users-data';
import { DatePipe } from '@angular/common';
import { MatTabGroup, MatTab, MatTabLabel } from '@angular/material/tabs';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-material-async',
    templateUrl: './material-async.component.html',
    styleUrls: ['./material-async.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatTabGroup,
        MatTab,
        MatTabLabel,
        DatePipe,
    ],
})
export class MaterialAsyncComponent {
  displayedColumns = ['email', 'created', 'roles'];
  users: User[] = usersdata;
}
