import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { StoreModule } from '@ngrx/store';
import { authState } from './state/auth.state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(authState),
    EffectsModule.forFeature([])
  ]
})
export class AuthModule { }