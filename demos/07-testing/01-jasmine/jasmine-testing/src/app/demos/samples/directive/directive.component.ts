import { Component, OnInit } from '@angular/core';
import { CapitalizeDirective } from './capitalize.directive';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, CapitalizeDirective]
})
export class DirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
