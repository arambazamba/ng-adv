import { Directive } from '@angular/core';
import { BorderDirective } from './border.directive';

@Directive({
  selector: '[appHeight]',
  host: { 'style': 'height:100px;' },
  standalone: true,
  hostDirectives: [BorderDirective]
})
export class HeightDirective {
}
