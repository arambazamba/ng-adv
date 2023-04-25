import { Directive } from '@angular/core';
import { HeightDirective } from './height.directive';

@Directive({
  selector: '[appWidth]',
  host: { style: 'width:100%;' },
  hostDirectives: [HeightDirective],
  standalone: true,
})
export class WidthDirective {
}
