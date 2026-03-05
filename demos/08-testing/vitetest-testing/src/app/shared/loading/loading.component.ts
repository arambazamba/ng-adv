import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
    selector: 'app-loading',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    imports: [MatProgressBar]
})
export class LoadingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
