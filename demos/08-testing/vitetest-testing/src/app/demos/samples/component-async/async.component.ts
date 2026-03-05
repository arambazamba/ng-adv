import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SimpleAuthWhenStableComponent } from './simple-auth-async-when-stable/simple-auth-when-stable.component';
import { SimpleAuthFakeAsyncComponent } from './simple-auth-fake-async/simple-auth-fake-async.component';
import { SimpleAuthDoneComponent } from './simple-auth-done/simple-auth-done.component';

@Component({
    selector: 'app-async',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './async.component.html',
    styleUrls: ['./async.component.scss'],
    imports: [
        SimpleAuthDoneComponent,
        SimpleAuthFakeAsyncComponent,
        SimpleAuthWhenStableComponent,
    ]
})
export class AsyncComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
