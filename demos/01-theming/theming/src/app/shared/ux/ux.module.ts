import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { uxButtonComponent } from './ux-button/ux-button.component';
import { uxSplitComponent } from './ux-split/ux-split.component';

const comps = [uxSplitComponent, uxButtonComponent];

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: comps,
  exports: comps,
})
export class UxModule { }
