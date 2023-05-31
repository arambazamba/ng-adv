import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseAuthUtilModule } from '../fbauth/fbauth.module';
import { FirebaseAuthInterceptor } from '../fbauth/firebase-auth.interceptor';
import { MaterialModule } from '../material.module';
import { FormattingModule } from '../shared/formatting/formatting.module';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { LoadingService } from '../shared/loading/loading.service';
import { MarkdownEditorModule } from '../shared/markdown-editor/markdown-editor.module';
import { MarkdownRendererModule } from '../shared/markdown-renderer/markdown-renderer.module';
import { SharedModule } from '../shared/shared.module';
import { DemoService } from './demo-base/demo.service';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AppAuthComponent } from './samples/app-auth/app-auth.component';
import { AuthGuardComponent } from './samples/auth-guard/auth-guard.component';
import { FirebaseComponent } from './samples/firebase/firebase.component';
import { HttpClientComponent } from './samples/http-client/http-client.component';
import { InterceptorComponent } from './samples/interceptor/interceptor.component';
import { ProtectedApiComponent } from './samples/protected-api/protected-api.component';
import { PublishComponent } from './samples/publish/publish.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DemosEffects } from './state/demos.effects';
import { demosFeatureKey, demoReducer } from './state/demos.reducer';

const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,

    children: [
      { path: 'http-client', component: HttpClientComponent },
      { path: 'firebase', component: FirebaseComponent },
      { path: 'app-auth', component: AppAuthComponent },
      { path: 'interceptor', component: InterceptorComponent },
      { path: 'secured-api', component: ProtectedApiComponent },
      { path: 'auth-guard', component: AuthGuardComponent },
      { path: 'publish', component: PublishComponent },
    ],
  },
];

@NgModule({
  declarations: [
    DemoContainerComponent,
    FirebaseComponent,
    AppAuthComponent,
    InterceptorComponent,
    AuthGuardComponent,
    ProtectedApiComponent,
    PublishComponent,
    HttpClientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    FirebaseAuthUtilModule,
    MarkdownRendererModule,
    MarkdownEditorModule,
    FormattingModule,
    StoreModule.forFeature(demosFeatureKey, demoReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: FirebaseAuthInterceptor, multi: true },
  ],
})
export class DemosModule { }
