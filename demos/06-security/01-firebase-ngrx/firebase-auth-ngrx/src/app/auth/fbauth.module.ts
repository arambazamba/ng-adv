import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { MaterialModule } from '../material.module';
import { AuthComponent } from './components/auth.component';
import { CurrentUserComponent } from './components/current-user/current-user.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
import { FBAuthRoutingModule } from './fbauth-routing.module';
import { AuthEffects } from './state/auth.effects';
import { reducer as AuthReducer, authFeatureKey } from './state/auth.reducer';

const comps = [AuthComponent, LogoutButtonComponent, CurrentUserComponent];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    MaterialModule,
    FBAuthRoutingModule,
    StoreModule.forFeature(authFeatureKey, AuthReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class FBAuthModule { }
