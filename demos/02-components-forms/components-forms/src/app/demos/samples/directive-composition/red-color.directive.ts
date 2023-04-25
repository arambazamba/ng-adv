import { Directive } from '@angular/core';

@Directive({
  selector: '[appRedColor]',
  host: { style: 'color:red;' },
  standalone: true,
})
export class RedColorDirective {
}
