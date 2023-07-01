import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { A11yComponent } from './samples/a11y/a11y.component';
import { BundlesComponent } from './samples/bundles/bundles.component';
import { DebugStatementsComponent } from './samples/debug-statements/debug-statements.component';
import { EsbuildComponent } from './samples/esbuild/esbuild.component';
import { EslintComponent } from './samples/eslint/eslint.component';
import { LighthouseComponent } from './samples/lighthouse/lighthouse.component';
import { LoggerComponent } from './samples/logger/logger.component';
import { NgforComponent } from './samples/ngfor/ngfor.component';
import { VirtualScrollComponent } from './samples/virtual-scroll/virtual-scroll.component';
import { NgOptimizedImageComponent } from './samples/ng-optimized-image/ng-optimized-image.component';

export const demoRoutes: Routes = [
  {
    path: '',
    component: DemoContainerComponent,
    title: 'Demos Home',
    children: [
      { path: 'esbuild', component: EsbuildComponent, title: 'Demos - ES Build' },
      { path: 'logger', component: LoggerComponent, title: 'Demos - Logger' },
      { path: 'bundles', component: BundlesComponent, title: 'Demos - Analyze Bundles' },
      { path: 'lighthouse', component: LighthouseComponent, title: 'Demos - Lighthouse KPIs' },
      { path: 'debug-statements', component: DebugStatementsComponent, title: 'Demos - Debug Statements' },
      { path: 'vscroll', component: VirtualScrollComponent, title: 'Demos - Virtual Scroll' },
      { path: 'ngfor', component: NgforComponent, title: 'Demos - NgFor' },
      { path: 'a11y', component: A11yComponent, title: 'Demos - A11y' },
      { path: 'eslint', component: EslintComponent, title: 'Demos - ESLint' },
      { path: 'ngoptimizedimg', component: NgOptimizedImageComponent },
    ],
  },
];
