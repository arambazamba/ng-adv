import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const comps = [
  NavbarComponent,
  SidePanelComponent,
  IntroComponent,
  MarkdownEditorComponent,
  LoadingComponent,
];

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ...comps,
],
    exports: comps,
})
export class SharedModule { }
