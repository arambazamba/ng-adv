# Progressive Web Apps

## Links & Readings

[Progressive Web Apps @Google](https://web.dev/progressive-web-apps/)

[Angular Service Workers](https://angular.io/guide/service-worker-intro)

[How to make PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs)

[Debugging Service Workers](https://developers.google.com/web/tools/workbox/guides/troubleshoot-and-debug)

## Demo / Tutorial

---
### Machine Setup

Allow Chrome to use self signed localhost certs:

```
chrome://flags/#allow-insecure-localhost
```

#### ngrok Setup

[ngrok](https://ngrok.com/) is a tool that provides an `https-secured tunnel` to `localhost` that enables testing your PWAs. Requires registration but is free.

After creating your free account copy ngrok.exe to a folder of your choice (`C:\Program Files\ngrok`) and set a path variable to it.

Next grap the auth token from your ngrok user info and add it to your machine config:

```
ngrok config add-authtoken 3XjdFZdf4PgB2898gcdbu_4Rukvv4BYtU1w7WaTZE75
```

---

### Skills Api

- Requires [.NET 6 SDK](https://dotnet.microsoft.com/download/dotnet/6.0).

- Go to folder where `*.csproj` is located, open console and run:

  `dotnet restore` and then  
  `dotnet run`

  >Note: A container for running Skills Api is available at [Docker Hub](https://hub.docker.com/repository/docker/arambazamba/skills-api/general)

- For device testing it might be helpful to enable remote access - by default the .Net Core API is only available using `http://localhost:PORT/` and is not listening to the ip of your dev machine.

  `dotnet run --urls http://0.0.0.0:5000` or
  `dotnet run --urls https://0.0.0.0:5001`

- If you want to use another db engine change connection string in appsettings.json.

---
### Skills PWA

Create a new Angular project and add PWA support:

```
ng new skills-pwa --routing --style=scss
cd skills-pwa
ng add @angular/pwa --project skills-pwa
```

Add environment config:

```
ng g environments --project skills-pwa
```

Make sure you adjust your `environment.ts` and `environment.development.ts` to match IP config of your dev machine

```
export const environment = {
    api: 'https://localhost:5001/api/'
};
```

Add `HttpClientModule` and `ReactiveFromsModule` to `app.module.ts`:

```typescript

>Note: PWA implementation code is skipped here. Copy `skills` and `hello` to your project and add them to `app.module.ts` and `app.component.ts`:

```html
<div class="card">
  <div class="container">
    <app-hello [greeting]="msgGreeting"></app-hello>
    <app-skills></app-skills>
  </div>
</div>
```

Test the app - see if it works

---

### Serving your app using ngrok & install the PWA

To serve the build you need an http-server. Use `angular-http-server` or `http-server`

```
npm install -g angular-http-server
ng build -c production
cd .\dist\skills-pwa\
angular-http-server
```

```
ngrok.exe http 8080
```

Open the Url provided by ngrok in your browser:

![ngrok](_images/ngrok.png)

Now you can install the PWA:

![install](_images/install.png)

Note that there is an update handler in app.component.ts:

```typescript
ngOnInit() {
  this.attachUpdateHandler();
}

private attachUpdateHandler() {
  if (this.swUpdate.isEnabled) {
    this.swUpdate.versionUpdates.subscribe(() => {
      if (confirm('New version available. Load New Version?')) {
        window.location.reload();
      }
    });
  }
}
```

Preloading / Fetching can be fine tuned in `ngsw-config.json`:

```json
"assetGroups": [
    {
      "name": "app",
      "installMode": "prefetch",
      "resources": {
        "files": [
          "/favicon.ico",
          "/index.html",
          "/manifest.webmanifest",
          "/*.css",
          "/*.js"
        ]
      }
    },
    {
      "name": "assets",
      "installMode": "lazy",
      "updateMode": "prefetch",
      "resources": {
        "files": [
          "/assets/**",
          "/*.(svg|cur|jpg|jpeg|png|apng|webp|avif|gif|otf|ttf|woff|woff2)"
        ]
      }
    }
  ]
```