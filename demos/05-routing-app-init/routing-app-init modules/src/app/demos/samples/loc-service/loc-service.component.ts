import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-loc-service',
  templateUrl: './loc-service.component.html',
  styleUrls: ['./loc-service.component.scss'],
})
export class LocServiceComponent implements OnInit {
  title = 'Location Service';
  constructor(public location: Location) {}

  ngOnInit(): void {}

  logPath() {
    console.log('Current Path', this.location.path());
  }
}
