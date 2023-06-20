# Monorepos & nrwl nx

[Nx Home](https://nx.dev/angular)

[npx create-nx-workspace](https://nx.dev/nx/create-nx-workspace)

[Angular Nx Tutorial ](https://nx.dev/getting-started/angular-tutorial)

[Nx Console - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console)

[Nx Console for JetBrain](https://plugins.jetbrains.com/plugin/21060-nx-console)

## Getting Started

Install the [Nx Console - VS Code Extension](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console). It provides a nice UI for the nx commands.

To spare yourself from executing `nx-cli` using `npx` you could also install nx-cli - optional:

```
npm i -g create-nx-workspace
npm i -g nx
```

Create a workspace tutorial-app-ws using the Angular preset:

```typescript
npx create-nx-workspace nx-mono-repo --preset=angular-monorepo --standaloneApi false --nxCloud false --appName tutorial-app --routing true --style scss
```

![nx-scaffold](_images/nx-scaffold.jpg)

Update `apps/tutorial-app/src/app/app.component.html`:

```html
<div>
  <h3>First Nx Monorepo App</h3>
</div>
```

Build & run the app `tutorial-app`:

```
nx build --project tutorial-app
nx build tutorial-app
nx serve --project tutorial-app -o
nx serve tutorial-app -o
```

> Note: Keep the tutorital-app running in the background, just like you would do when using Angular CLI.

Test the app using Jest (default)

```
nx test tutorial-app
```

Update the `apps/tutorial-app/src/appapp.component.spec.ts` to allow the test to pass and re-run the test:

```typescript
it('should render title', () => {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector('h3')?.textContent).toContain(
    'First Nx Monorepo App'
  );
});
```

## Using libraries

Add a library project from the root of the nx workspace:

```typescript
nx g @nrwl/angular:lib ux-lib --style scss
```

Show a project graph in from separate terminal and keep it open:

```typescript
npx nx graph --watch
```

Check the tutorial-app and ux-lib project in the graph.

![nx-graph](_images/nx-graph.jpg)

At the moment the graph is empty, even if you select the `tutorial-app` and `ux-helpers` lib. In the next setep we will add the content from `Module 02 - Components` to the library and the use it in the app. Navigate to app/shared/ux-lib and examine the split component. 

Next we will create a component in the nx-mono-repo:

```typescript
nx g @nrwl/angular:component ux-split --project ux-lib --export --selector ux-split --style scss
```

Notice that Nx registeres the component in the `ux-lib.module.ts` and exports it in the index.ts. You can now copy the content of `Module 02 - Components` from `ux-split.component.ts` and `ux-split.component.html` and `*.scss` files. 

>Note: You will have to replace the variables in the scss files with concrete values. In a real project you would provides an *scss file with default values for the variables.

Use the app.component.ts in the main app. In app.module.ts import the `UxLibModule` and notice how the dependency graph is updated:

```typescript
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    UxLibModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

In app.component.html delete the default content and use the component:

```html
<div>
  <h3>First Nx Monorepo App</h3>
</div>
<ux-split>
  <div class="title">The Popup</div>
  <div class="main">I don't like green watermelons</div>
  <div class="sidebar">
    
  </div>
</ux-split>
```

Add Angular Material to the workspace to use it in the `ux-lib` project:

```
npx nx g @angular/material:ng-add --project=ux-lib 
```

Add Material to tutorial-app. Select a theme of your choice, enable typography and disable animations:

```
nx g @angular/material:ng-add --project=tutorial-app
```

![nx-material](_images/material.jpg)

Import `MatToolbarModule` in `ux-controls.module.ts`:

```typescript
...
import { UxSplitComponent } from './ux-split/ux-split.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, MatToolbarModule],
  declarations: [UxSplitComponent],
  exports: [UxSplitComponent],
})
export class UxControlsModule {}
```

Update `ux-split.component.scss`.:

```css
.maingrid {
  display: grid;
  grid-template-rows: 60px auto;
  grid-template-columns: auto 180px;
  grid-template-areas: "title title" "main sidebar";
  height: 100vh;
  width: 100%;
}

.title{
  grid-area: title;
  background-color: lavender;
}

.main{
  padding: 1rem;
  grid-area: main;
  background-color: yellow;
}

.sidebar{
  padding: 1rem;
  grid-area: sidebar;
  background-color: lightblue;
}
```

Update `ux-split.component.html`:

```html
<div class="maingrid">
  <div class="title">
    <mat-toolbar mat-dialog-title>
      <mat-toolbar-row>
        <ng-content select=".title"></ng-content>
      </mat-toolbar-row>
    </mat-toolbar>
  </div>
  <div class="main">
    <ng-content select=".main"></ng-content>
  </div>
  <div class="sidebar">
    <ng-content select=".sidebar"></ng-content>
  </div>
</div>
```

> Note: After you have checked the layout out can delete the background colors.

Implement an reusable Button:

```
nx g @nrwl/angular:component uxButton --project ux-controls --export 
```

> Note: You might have to fix the import path in `ux-controls.module.ts`

Update imports in ux-controls.module.ts:

```typescript
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
...
imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule],
```

ux-button.ts & ux-button.html

```typescript
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ux-button',
  templateUrl: './ux-button.component.html',
  styleUrls: ['./ux-button.component.scss'],
})
export class UxButtonComponent {
  @Input() disabled = false;
  @Input() label = '';
  @Input() icon = '';
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.icon = '';
  }

  buttonClicked() {
    this.onClick.emit();
  }
}
```

```html
<button
  mat-raised-button
  (click)="buttonClicked()"
  [disabled]="disabled"
  color="primary"
>
  <mat-icon color="accent" fontIcon="bug_report"></mat-icon>
  <span>{{ label }}</span>
</button>
```

Use the Button in the `tutorial-app-project`. 

Add it to `app.component.html`:

```html
<div>
  <h3>{{title}}</h3>
  <ux-button
    [icon]="'bug_report'"
    [label]="'Report Bug'"
    (onClick)="doClick()"
  ></ux-button>
</div>
```

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'angular-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tutorial-app';

  doClick() {
    console.log('you clicked');
  }
}
```

Your project should look like this:

![with-button](_images/with-button.jpg)



## Second app and dependency graph

Add a second app used for dependency graph later on:

```
nx generate @nrwl/angular:app ng-otherapp --routing --style=scss 
```

Repate the steps in the second project in order to see a Dependency Graph where the button is used in two projects

```
nx dep-graph
```

You should see something similar:

![dep-graph](_images/dep-graph.png)
