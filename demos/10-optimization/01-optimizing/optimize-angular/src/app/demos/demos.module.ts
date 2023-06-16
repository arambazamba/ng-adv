import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { MaterialModule } from '../material.module';
import { MarkdownEditorModule } from '../shared/markdown-editor/markdown-editor.module';
import { MarkdownRendererModule } from '../shared/markdown-renderer/markdown-renderer.module';
import { SharedModule } from '../shared/shared.module';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { demoRoutes } from './demo.routing.module';
import { A11yComponent } from './samples/a11y/a11y.component';
import { BundlesComponent } from './samples/bundles/bundles.component';
import { ConsoleComponent } from './samples/console/console.component';
import { DebugStatementsComponent } from './samples/debug-statements/debug-statements.component';
import { DynamicLoadingComponent } from './samples/dynamic-loading/dynamic-loading.component';
import { SimpleComponent } from './samples/dynamic-loading/simple.component';
import { EslintComponent } from './samples/eslint/eslint.component';
import { InjectConfigComponent } from './samples/inject-config/inject-config.component';
import { LighthouseComponent } from './samples/lighthouse/lighthouse.component';
import { LoggerComponent } from './samples/logger/logger.component';
import { NgforComponent } from './samples/ngfor/ngfor.component';
import { NgrxpushComponent } from './samples/ngrxpush/ngrxpush.component';
import { VirtualScrollComponent } from './samples/virtual-scroll/virtual-scroll.component';
import { DemosEffects } from './state/demos.effects';
import { demoReducer, demosFeatureKey } from './state/demos.reducer';
import { EsbuildComponent } from './samples/esbuild/esbuild.component';
import { NgOptimizedImageComponent } from './samples/ng-optimized-image/ng-optimized-image.component';

@NgModule({
  declarations: [
    DemoContainerComponent,
    LoggerComponent,
    BundlesComponent,
    ConsoleComponent,
    DebugStatementsComponent,
    InjectConfigComponent,
    NgrxpushComponent,
    LighthouseComponent,
    VirtualScrollComponent,
    NgforComponent,
    DynamicLoadingComponent,
    SimpleComponent,
    A11yComponent,
    EslintComponent,
    EsbuildComponent,
    NgOptimizedImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(demoRoutes),
    MaterialModule,
    HttpClientModule,
    SharedModule,
    MarkdownRendererModule,
    MarkdownEditorModule,
    StoreModule.forFeature(demosFeatureKey, demoReducer),
    EffectsModule.forFeature([DemosEffects]),
    LoggerModule.forRoot({
      serverLoggingUrl: 'http://localhost:3000/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
  ],
  providers: [],
})
export class DemosModule { }
