import { Routes } from '@angular/router';
import { DemoContainerComponent } from './demo-container/demo-container.component';
import { AppAuthComponent } from './samples/app-auth/app-auth.component';
import { AuthGuardComponent } from './samples/auth-guard/auth-guard.component';
import { FirebaseComponent } from './samples/firebase/firebase.component';
import { HttpClientComponent } from './samples/http-client/http-client.component';
import { InterceptorComponent } from './samples/interceptor/interceptor.component';
import { ProtectedApiComponent } from './samples/protected-api/protected-api.component';
import { PublishComponent } from './samples/publish/publish.component';

export const demoRoutes: Routes = [
    {
        path: '',
        component: DemoContainerComponent,

        children: [
            { path: 'http-client', component: HttpClientComponent },
            { path: 'firebase', component: FirebaseComponent },
            { path: 'app-auth', component: AppAuthComponent },
            { path: 'interceptor', component: InterceptorComponent },
            { path: 'secured-api', component: ProtectedApiComponent },
            { path: 'auth-guard', component: AuthGuardComponent },
            { path: 'publish', component: PublishComponent },
        ],
    },
];