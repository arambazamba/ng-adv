import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoItem } from '../../../demo-base/demo-item.model';
import { DemoFacade } from '../../../state/demo.facade';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField } from '@angular/material/form-field';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-demo-edit',
    templateUrl: './demo-edit.component.html',
    styleUrls: ['./demo-edit.component.scss'],
    standalone: true,
    imports: [
        MatCard,
        MatCardHeader,
        MatCardTitle,
        MatCardContent,
        MatFormField,
        MatInput,
        FormsModule,
        ReactiveFormsModule,
        MatCardActions,
        MatButton,
    ],
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
