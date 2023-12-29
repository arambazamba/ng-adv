import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { IntroComponent } from './intro/intro.component';
import { LoadingComponent } from './loading/loading.component';
import { BorderDirective, CenteredDirective, ColumnDirective, GapDirective, RowDirective } from './formatting/formatting-directives';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SidePanelComponent,
    IntroComponent,
    LoadingComponent,
  ],
  exports: [
    NavbarComponent,
    SidePanelComponent,
    IntroComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    ColumnDirective,
    RowDirective,
    GapDirective,
    CenteredDirective,
    BorderDirective
  ],
})
export class SharedModule { }
