import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AppInitComponent } from './samples/app-init/app-init.component';
import { DiInjectComponent } from './samples/di-inject/di-inject.component';
import { GlobalErrorsComponent } from './samples/global-errors/global-errors.component';
import { HttpErrorsComponent } from './samples/http-errors/http-errors.component';
import { MembersComponent } from './samples/multi-guard/members/members.component';
import { MultiGuardComponent } from './samples/multi-guard/multi-guard.component';
import { onlyAuthenticatedGuard } from './samples/multi-guard/only-authenticated.guard';
import { onlyPrimeMembersGuard } from './samples/multi-guard/only-prime-members.guard';
import { PrimeComponent } from './samples/multi-guard/prime/prime.component';
import { MultiInterceptorComponent } from './samples/multi-interceptor/multi-interceptor.component';
import { NgrxRouterActionsComponent } from './samples/ngrx-router-actions/ngrx-router-actions.component';
import { PreloadingNgrxComponent } from './samples/preloading-ngrx/preloading-ngrx.component';
import { RouterAnimationsComponent } from './samples/router-animations/router-animations.component';
import { RouterBindingComponent } from './samples/router-binding/router-binding.component';
import { RoutingTargetComponent } from './samples/routing/routing-target/routing-target.component';
import { RoutingComponent } from './samples/routing/routing/routing.component';

export const demoRoutes: Routes = [
    {
        path: '',
        component: DemoContainerComponent,
        children: [
            {
                path: 'inject',
                component: DiInjectComponent,
            },
            {
                path: 'app-init',
                component: AppInitComponent,
            },
            {
                path: 'ngrx-routing',
                component: RoutingComponent,
                children: [{ path: ':id', component: RoutingTargetComponent }],
            },
            {
                path: 'router-bindings',
                component: RouterBindingComponent,
            },
            {
                path: 'ngrx-resolver',
                component: PreloadingNgrxComponent,
            },
            {
                path: 'ngrx-router-actions',
                component: NgrxRouterActionsComponent,
            },
            {
                path: 'multi-guard',
                component: MultiGuardComponent,
                children: [
                    {
                        path: 'members',
                        component: MembersComponent,
                        canActivate: [
                            onlyAuthenticatedGuard
                        ],
                    },
                    {
                        path: 'prime',
                        component: PrimeComponent,
                        canActivate: [
                            onlyAuthenticatedGuard,
                            onlyPrimeMembersGuard
                        ],
                    },
                ],
            },
            {
                path: 'multi-interceptor',
                component: MultiInterceptorComponent,
            },
            {
                path: 'global-errors',
                component: GlobalErrorsComponent,
            },
            {
                path: 'http-errors',
                component: HttpErrorsComponent,
            },
            {
                path: 'router-animations',
                component: RouterAnimationsComponent,
            }
        ],
    },
];
