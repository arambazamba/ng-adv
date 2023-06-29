# Injecting Configurations into Docker Containers

## Config from Environments Vars

Open project `container-starter` and add the following `Dockerfile`:

```dockerfile
FROM node:16 as node
LABEL author="Alexander Pajer"
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build -- -c production

##### Stage 2 - Create the run-time-image
FROM nginx:alpine
VOLUME /var/cache/nginx
# Copy from build-image to nginx base folder
COPY --from=node /app/dist/food-app /usr/share/nginx/html
# Copy nginx config
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
```

Build the container using the following command:

```bash
docker build -t food-app .
```

Run the container using the following command:

```bash
docker run -d --rm -p 5052:80
```

Connect to the container by navigation to http://localhost:5052/

## Config from Config Files

Starte an existing .NET Api as a container:

```bash
docker run -d --rm -p 5051:80 arambazamba/food-catalog-api:1.1.0
```

Test the api by navigating to http://localhost:5051/

To be able to inject the URL to the front-end container we will update `environment.ts`:

```typescript
declare global {
  interface Window {
    env: any;
  }
}
export const environment = {
  production: true,
  api: window['env'].API_URL,
};
```

The environments vars will be produced by two files located in the assets folder:

env.js:

```javascript
(function (window) {
  window["env"] = window["env"] || {};
  window["env"].API_URL = "http://localhost:3000";
})(this);
```

env.template.js:

```javascript
(function (window) {
  window["env"] = window["env"] || {};
  window["env"].API_URL = "${ENV_API_URL}";
})(this);
```

Add the following line to the end of the dockerfile:
  
```dockerfile 
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
```

Rebuild the contaienr and run it again by providing the environment variable for ENV_API_URL:

```bash
docker run -d --rm -p 5052:80 --env ENV_API_URL="http://localhost:5051/api" food-app
```