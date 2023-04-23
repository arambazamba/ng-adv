import { Component, Input, SimpleChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  @Input() id?: string;

  ngOnInit(): void {
    console.log('CustomerEditComponent - ngOnInit', this.id);
  }
}
