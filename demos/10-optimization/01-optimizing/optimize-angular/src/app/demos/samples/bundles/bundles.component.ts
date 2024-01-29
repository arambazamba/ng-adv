import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-bundles',
  standalone: true,
  templateUrl: './bundles.component.html',
  styleUrls: ['./bundles.component.scss'],
  imports: [MarkdownRendererComponent, MatCardModule],
})
export class BundlesComponent {
  strDt = moment(new Date()).add(1, 'days').format('MMM Do YY');
}
