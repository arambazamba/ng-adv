import { Directive } from '@angular/core';

@Directive({
  selector: '[centered]',
  host: { style: 'display:flex;justify-content: center;align-items: center;' },
  standalone: true,
})
export class CenteredDirective {
}
