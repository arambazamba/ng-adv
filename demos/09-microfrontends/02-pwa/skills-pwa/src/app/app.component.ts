import { Component, OnInit, inject } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  updater = inject(SwUpdate);
  msgGreeting = 'Angular Developer';
  message: any;

  ngOnInit() {
    this.attachUpdateHandler();
  }

  attachUpdateHandler() {
    if (this.updater.isEnabled) {
      this.updater.versionUpdates.subscribe(() => {
        if (confirm('New version available. Load New Version?')) {
          window.location.reload();
        }
      });
    }
  }
}
