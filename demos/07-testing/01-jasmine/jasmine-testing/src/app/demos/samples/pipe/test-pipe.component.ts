import { Component, OnInit } from '@angular/core';
import { PhonenumberPipe } from './phonenumber.pipe';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';

@Component({
    selector: 'app-test-pipe',
    templateUrl: './test-pipe.component.html',
    styleUrls: ['./test-pipe.component.scss'],
    standalone: true,
    imports: [
        MarkdownRendererComponent,
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        PhonenumberPipe,
    ],
})
export class TestPipeComponent implements OnInit {
  constructor() { }

  phone = "3333333333";

  ngOnInit() { }
}
