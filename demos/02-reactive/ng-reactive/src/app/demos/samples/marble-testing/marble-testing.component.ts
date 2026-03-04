import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-marble-testing',
    templateUrl: './marble-testing.component.html',
    styleUrls: ['./marble-testing.component.scss'],
    imports: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarbleTestingComponent {
}
