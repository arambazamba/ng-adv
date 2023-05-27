import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseAuthModule } from '../fbauth/fbauth.module';
import { MaterialModule } from '../material.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { FirebaseComponent } from './samples/firebase/firebase.component';
import { DemoService } from './demo-base/demo.service';
import { LoadingService } from '../shared/loading/loading.service';
import { LoadingInterceptor } from '../shared/loading/loading-interceptor';
import { PublishComponent } from './samples/publish/publish.component';
import { FirebaseAuthInterceptor } from '../fbauth/firebase-auth.interceptor';
import { AppAuthComponent } from './samples/app-auth/app-auth.component';
import { AuthGuardComponent } from './samples/auth-guard/auth-guard.component';
import { InterceptorComponent } from './samples/interceptor/interceptor.component';
import { ProtectedApiComponent } from './samples/protected-api/protected-api.component';
import { MarkdownRendererModule } from '../shared/markdown-renderer/markdown-renderer.module';
import { HttpClientComponent } from './samples/http-client/http-client.component';

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
    FirebaseAuthModule,
    MarkdownRendererModule
  ],
  providers: [
    DemoService,
    LoadingService,
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FirebaseAuthInterceptor,
      multi: true,
    },
  ],
})
export class DemosModule { }
