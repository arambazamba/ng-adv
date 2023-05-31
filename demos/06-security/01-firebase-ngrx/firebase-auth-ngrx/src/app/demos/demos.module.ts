import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LogInModule } from '../auth/components/login/login.module';
import { RegisterModule } from '../auth/components/register/register.module';
import { FBAuthModule } from '../auth/fbauth.module';
import { MaterialModule } from '../material.module';
import { MarkdownEditorModule } from '../shared/markdown-editor/markdown-editor.module';
import { MarkdownRendererModule } from '../shared/markdown-renderer/markdown-renderer.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { DemosRoutingModule } from './demos-routing.module';
import { FirebaseAuthComponent } from './samples/firebase-auth/firebase-auth.component';
import { DemosEffects } from './state/demos.effects';
import { demoReducer, demosFeatureKey } from './state/demos.reducer';
import { FormattingModule } from '../shared/formatting/formatting.module';

@NgModule({
  declarations: [
    DemoContainerComponent,
    FirebaseAuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemosRoutingModule,
    FBAuthModule,
    LogInModule,
    RegisterModule,
    MaterialModule,
    HttpClientModule,
    MarkdownRendererModule,
    MarkdownEditorModule,
    FormattingModule,
    SharedModule,
    StoreModule.forFeature(demosFeatureKey, demoReducer),
    EffectsModule.forFeature([DemosEffects]),
  ],
  providers: [],
})
export class DemosModule { }
