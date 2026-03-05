import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'lib-ux-button',
  standalone: true,
  imports: [CommonModule, MatButton, MatIcon],
  templateUrl: './ux-button.component.html',
  styleUrl: './ux-button.component.scss',
})
export class UxButtonComponent {
  disabled = input<boolean>(false);
  label = input<string>('');
  icon = input<string>('');
  onClick = output<void>();

  buttonClicked() {
    this.onClick.emit();
  }
}
