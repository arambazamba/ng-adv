# Optimizing Angular

[Lighthouse](https://developers.google.com/web/tools/lighthouse)

[Angular AOT Compiler](https://angular.io/guide/aot-compiler)

[Angular Debug Statements](https://angular.io/api/core/global)

[Airbnb Style Guide](https://github.com/webdev-tools/tslint-airbnb-styleguide)

## Analyzing Bundles

[Performance Budget Calculator](https://perf-budget-calculator.firebaseapp.com/)

[ngx-quicklink - preloading](https://github.com/mgechev/ngx-quicklink)

## Accessibilty

[Accessible Rich Internet Applications - ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

[Angular A11y Guide](https://angular.io/guide/accessibility)

[Material A11y](https://material.angular.io/cdk/a11y/overview)

[Lab: Angular A11y](https://codelabs.developers.google.com/angular-a11y)

## Change Detection

Parts of the slides are taken from:

[The Last Guide For Angular Change Detection You'll Ever Need - (c) Michael Hoffmann](https://www.mokkapps.de/blog/the-last-guide-for-angular-change-detection-you-will-ever-need/#:~:text=By%20default%2C%20Angular%20Change%20Detection,which%20produces%20VM%2Doptimized%20code.)

Enable Angular Debug Tools in `main.ts`:

```
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(moduleRef => {
    const applicationRef = moduleRef.injector.get(ApplicationRef);
    const componentRef = applicationRef.components[0];
    // allows to run `ng.profiler.timeChangeDetection();`
    enableDebugTools(componentRef);
  })
  .catch(err => console.error(err));
```

Run App, select sample 'Change Detection' open console and enter:

```
ng.profiler.timeChangeDetection()
```

Change ChangeDetectionStrategy in `skills-list.component.ts` and compare values

Using `Running ng.profiler.timeChangeDetection({record: true})` allows you to see a detailed execution report using JavaScriptProfiler

![change-detection.png](_images/change-detection.png)
