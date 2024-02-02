import { Component } from '@angular/core';
import { MarkdownRendererComponent } from 'src/app/shared/markdown-renderer/markdown-renderer.component';

@Component({
  selector: 'app-signal-inputs',
  standalone: true,
  imports: [MarkdownRendererComponent],
  templateUrl: './signal-inputs.component.html',
  styleUrl: './signal-inputs.component.scss'
})
export class SignalInputsComponent {

}
