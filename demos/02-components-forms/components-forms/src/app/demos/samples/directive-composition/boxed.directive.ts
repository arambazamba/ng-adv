import { Directive } from '@angular/core';
import { FontBoldDirective } from './font-bold.directive';
import { RedColorDirective } from './red-color.directive';
import { WidthDirective } from './width.directive';
import { CenteredDirective } from './centered.directive';

@Directive({
  selector: '[boxed]',
  hostDirectives: [
    RedColorDirective,
    FontBoldDirective,
    WidthDirective,
    CenteredDirective,
  ],
})
export class BoxedDirective {
}
