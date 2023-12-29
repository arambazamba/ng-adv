import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntityDataModule } from '@ngrx/data';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FBAuthInterceptor } from './auth/fbauth.interceptor';
import { FBAuthModule } from './auth/fbauth.module';
import { ErrPageComponent } from './error/err-page/err-page.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { metaReducers, reducers } from './state';
import { IntroComponent } from './shared/intro/intro.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ErrPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    FBAuthModule,
    IntroComponent,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'ng-demo-app',
      maxAge: 25,
      logOnly: environment.production,
    connectInZone: true}),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Full,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FBAuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
