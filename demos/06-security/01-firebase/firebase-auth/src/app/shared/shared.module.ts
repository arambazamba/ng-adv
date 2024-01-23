import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FirebaseAuthUtilModule } from '../fbauth/fbauth.module';

import { LoadingComponent } from './loading/loading.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidePanelComponent } from './side-panel/side-panel.component';

const mods = [
  NavbarComponent,
  SidePanelComponent,
  LoadingComponent
];

@NgModule({
    imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    FirebaseAuthUtilModule,
    ...mods
],
    exports: mods,
})
export class SharedModule { }
