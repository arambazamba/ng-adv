import { Component, Signal, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-component-write',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'component-write.component.html',
    styleUrls: ['./component-write.component.scss'],
    imports: [
        MarkdownRendererComponent,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
    ]
})
export class ComponentWriteComponent {
  user: Signal<userType> = signal({ username: 'Giro the hunter from Spain', id: 1 });
}

export type userType = { username: string, id: number }