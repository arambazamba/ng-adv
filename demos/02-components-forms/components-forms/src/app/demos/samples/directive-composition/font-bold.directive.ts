import { Directive } from '@angular/core';

@Directive({
  selector: '[appFontBold]',
  host: { 'style': 'font-weight:bold;' },
  standalone: true
})
export class FontBoldDirective {
}
