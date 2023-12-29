import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AuthModule, getAuth, provideAuth } from '@angular/fire/auth';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterState } from '@angular/router';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerEffects } from './customers/state/customers.effects';
import { FirebaseAuthUtilModule } from './fbauth/fbauth.module';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { IntroComponent } from './shared/intro/intro.component';
import { SharedModule } from './shared/shared.module';
import { metaReducers, reducers } from './state';
import { CustomersComponent } from './customers/component/customer-list/customers.component';
import { CustomerEditComponent } from './customers/component/customer-edit/customer-edit.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, CustomersComponent, CustomerEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([CustomerEffects]),
    EntityDataModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'firebase-auth',
      maxAge: 25,
      logOnly: environment.production,
    connectInZone: true}),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    AuthModule,
    FirebaseAuthUtilModule,
    IntroComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
