import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-loc-service',
    templateUrl: './loc-service.component.html',
    styleUrls: ['./loc-service.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatCardActions,
        MatButton,
    ],
})
export class LocServiceComponent implements OnInit {
  title = 'Location Service';
  constructor(public location: Location) {}

  ngOnInit(): void {}

  logPath() {
    console.log('Current Path', this.location.path());
  }
}
