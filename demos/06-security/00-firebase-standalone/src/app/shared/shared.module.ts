import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FirebaseAuthModule } from '../fbauth/fbauth.module';
import { MaterialModule } from '../material.module';
import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { MarkdownEditorComponent } from './markdown-editor/markdown-editor.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { CenteredDirective, RowDirective } from './formatting-directives';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  IntroComponent,
  LoadingComponent,
  MarkdownEditorComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    FirebaseAuthModule,
    CenteredDirective,
    RowDirective
  ],
  declarations: mods,
  exports: mods,
})
export class SharedModule { }
