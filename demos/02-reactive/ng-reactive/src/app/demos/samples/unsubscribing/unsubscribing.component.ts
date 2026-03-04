import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TakeUntilDestroyedComponent } from '../take-until-destroyed/take-until-destroyed.component';

@Component({
    selector: 'app-unsubscribing',
    templateUrl: './unsubscribing.component.html',
    styleUrls: ['./unsubscribing.component.scss'],
    imports: [TakeUntilDestroyedComponent],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UnsubscribingComponent { }
