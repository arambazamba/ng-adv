import { Component, inject } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { AILoggerService } from 'src/app/shared/logging/ailogger.service';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-logger',
    templateUrl: './logger.component.html',
    styleUrls: ['./logger.component.scss'],
    standalone: true,
    imports: [MarkdownRendererComponent, MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatButton]
})
export class LoggerComponent {
  ngxLogger = inject(NGXLogger);
  appInsights = inject(AILoggerService);

  logNgx() {
    this.ngxLogger.debug('Entering LoggerComponent');
    this.ngxLogger.info('Multiple', 'Argument', 'Support');
    this.ngxLogger.error('Error', 'Error Details');
  }

  logAppInsights() {
    this.appInsights.logEvent('LoggerComponent', { name: 'LoggerComponent' });
  }
}
