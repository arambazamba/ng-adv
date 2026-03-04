import { Component } from '@angular/core';

@Component({
    selector: 'app-detector-child',
    templateUrl: './detector-child.component.html',
    styleUrls: ['./detector-child.component.scss'],
    standalone: true,
})
export class DetectorChildComponent {
  childData = 'I like Thai food';
}
