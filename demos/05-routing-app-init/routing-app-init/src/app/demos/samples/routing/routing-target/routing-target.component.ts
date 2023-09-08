import { Component, inject } from '@angular/core';
import { RouterReducerState } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { getRouterInfo } from 'src/app/state/router.selectors';

@Component({
  selector: 'app-routing-target',
  templateUrl: './routing-target.component.html',
  styleUrls: ['./routing-target.component.scss'],
})
export class RoutingTargetComponent {
  store = inject(Store) as Store<RouterReducerState>;
  routerState$ = this.store.select(getRouterInfo).pipe(tap(console.log));
}