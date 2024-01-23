import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { DemoFacade } from '../../../state/demo.facade';

@Component({
  selector: 'app-demo-edit',
  templateUrl: './demo-edit.component.html',
  styleUrls: ['./demo-edit.component.scss'],
})
export class DemoEditComponent implements OnInit {
  df = inject(DemoFacade);
  item = this.df.getSelectedDemo();
  fcName = new FormControl('');

  ngOnInit() {
    this.item.subscribe((val: DemoItem) => this.fcName.setValue(val.title));
  }

  saveItem() { }
}
