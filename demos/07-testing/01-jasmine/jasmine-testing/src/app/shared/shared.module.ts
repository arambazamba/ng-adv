import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { LoadingComponent } from './loading/loading.component';
import { IntroComponent } from './intro/intro.component';

const comps = [
  NavbarComponent,
  SidePanelComponent,
  LoadingComponent,
  IntroComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MaterialModule,
    NgOptimizedImage,
  ],
  declarations: comps,
  exports: comps,
})
export class SharedModule { }
