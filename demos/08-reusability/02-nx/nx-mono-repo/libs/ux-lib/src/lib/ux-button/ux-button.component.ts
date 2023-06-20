import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss'],
})
export class UxButtonComponent {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon = '';
  @Output() click = new EventEmitter<string>();

  buttonClicked() {
    this.click.emit("you clicked the button");
  }
}
