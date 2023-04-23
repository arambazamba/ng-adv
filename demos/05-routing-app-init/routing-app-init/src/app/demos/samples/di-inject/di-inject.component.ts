import { Component, inject } from '@angular/core';
import { DemoService } from '../../demo-base/demo.service';

@Component({
  selector: 'app-di-inject',
  templateUrl: './di-inject.component.html',
  styleUrls: ['./di-inject.component.scss']
})
export class DiInjectComponent {
  service = inject(DemoService);
  demos = this.service.getItems();
}
