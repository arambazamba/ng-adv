import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.scss']
})
export class RoutingComponent implements OnInit {
  links: { label: string; id: number; readonly: boolean }[] = [
    { label: 'Route A', id: 1, readonly: true },
    { label: 'Route B', id: 2, readonly: false },
    { label: 'Route C', id: 3, readonly: true }
  ];

  ngOnInit() {}
}
