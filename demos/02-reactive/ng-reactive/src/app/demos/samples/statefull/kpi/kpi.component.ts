import { Component, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { StatefulDemoService } from '../stateful-demo.service';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
})
export class KpiComponent {
  service = inject(StatefulDemoService);
  count = this.service.getDemos().pipe(map((items) => items.length));
}
