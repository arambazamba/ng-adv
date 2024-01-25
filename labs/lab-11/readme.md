# Optimizing Angular Apps

-   Build more accessible Angular apps
-   Server Side Rendering (SSR) with Angular Universal

## Build more accessible Angular apps

[Lab: Angular A11y](https://codelabs.developers.google.com/angular-a11y)

## Server Side Rendering (SSR) with Angular Universal

-   Create project and add Universal:

    ```
    ng new food-list-ssr --routing --style=scss --ssr=true
    cd food-list-ssr
    ```

-   Add Angular Material:

    ```
    ng add @angular/material
    ```

-   Add a script to track First Contentful Pain (FCP) to the `<head>` of `index.html`:

    ```javascript
    <script>
        // Log first contentful paint
        // https://web.dev/fcp/#measure-fcp-in-javascript
        const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntriesByName("first-contentful-paint")) {
            console.log("FCP: ", entry.startTime);
            observer.disconnect();
        }
        });
        observer.observe({ type: "paint", buffered: true });
    </script>
    ```

    > Note: Reade more about [PerformanceObserver](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver) on MDN

-   Execute Client and note the FCP value in the console:

    ```bash
    ng s -o
    ```

-   Execute Node Express on `http://localhost:4000` and compare FCP values and examine the html source. Also create Lighthouse Audit and compare time used for `Scripting`

    ```bash
    ng build
    npm run serve:ssr:food-list-ssr
    ```

## Use Pre-rendering

-   Add `food/food-model.ts` from artifacts folder
-   Add `food/food.service.ts` from artifacts folder
-   Add `food/shop-item.component.ts` from artifacts folder
-   Add `food/food-list.component.ts` from artifacts folder
-   Add `food/food-details.component.ts` from artifacts folder
-   Add `shared/number-picker.component.ts` from artifacts folder
-   Add `euro.pipe.ts` from artifacts folder

    > Note: After adding the files review the code and make sure you understand it.

-   Add routes to `app.routes.ts`:

-   Create `routes.txt` in the root folder. It defines routes to pre-render:

```
/food/1
/food/2
/food/3
```

-   To configure pre-rendered pages open `angular.json` and replace the following to the `architect` section:

    ```json
    "prerender": true,
    ```
    with:

    ```json
    "prerender": {
        "routesFile": "routes.txt"
    },
    ```

-   Execute pre-rendering:

    ```bash
    ng build -c production
    ```

-   Examine `dist\food-list-ssr\browser\food\...`
