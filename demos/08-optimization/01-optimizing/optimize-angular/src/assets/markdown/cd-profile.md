Enable change detection profiling in main.ts:

```typescript
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // used to demonstrate the change detection profiling
  .then((moduleRef) => {
    const applicationRef = moduleRef.injector.get(ApplicationRef);
    const componentRef = applicationRef.components[0];
    // allows to run `ng.profiler.timeChangeDetection();`
    enableDebugTools(componentRef);
  })
  .catch((err) => console.error(err));
```

navigate to `Skills`, open Dev Tools & console and enter:

```
ng.profiler.timeChangeDetection()
```

>Note: Optionally explain ng.profiler.timeChangeDetection({record: true})