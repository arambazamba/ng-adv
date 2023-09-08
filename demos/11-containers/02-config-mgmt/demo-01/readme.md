# Inject Configuration into a Container using Environment Variables

## .NET Api

- Examine appsettings.json. We will override the values in this file using environment variables

    ```json
    {
        "App": {
            "AuthEnabled": false,
            "UseEnv": false,
            "UseAppConfig": false,
            ...
        }
    }
    ```

- Examine Program.cs. It is loading the config and overrides values with environment variables

    ```csharp
    var configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json")
    .AddEnvironmentVariables()
    .Build();
    ```

- Build container using:     

    ```bash
    docker build --rm -f dockerfile -t config-api .
    ```

- Run container using:

    ```bash
    docker run -it --rm -p 5051:80 config-api -e "App:UseEnv=true" 
    ```    

- Tag container using:

    ```bash
    docker tag config-ui <your-docker-id>/config-api
    ```

- Push container using:

    ```bash
    docker push <your-docker-id>/config-api
    ```      

## Angular UI

- Examine `env.js` and `env.template.js` in `src/assets/`. These files are used to substitutes environment variables

    ```javascript
    (function (window) {
    window["env"] = window["env"] || {};
    window["env"].API_URL = "${ENV_API_URL}";
    })(this);
    ```

- env.js is called by the last line of yaml in the dockerfile:

    ```bash
    CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > \
        /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
    ```

- Build container using:     

    ```bash
    docker build --rm -f Dockerfile -t config-ui .
    ```

- Run container using:

    ```bash
    docker run -d --rm -p 5052:80 --env ENV_API_URL="https://localhost:5051" config-ui
    ```

- Tag container using:

    ```bash
    docker tag config-ui <your-docker-id>/config-ui
    ```

- Push container using:

    ```bash
    docker push <your-docker-id>/config-ui
    ```        