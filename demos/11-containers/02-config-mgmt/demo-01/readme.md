# Inject Configuration into a conatainer using environment variables

- Examine `env.js` and `env.template.js` in `src/assets/`. These files are used to substitutes environment variables

    ```javascript
    (function (window) {
    window["env"] = window["env"] || {};
    window["env"].API_URL = "${ENV_API_URL}";
    })(this);
    ```

- env.js is called by the last line of yaml in the dockerfile:

    ```bash
    CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
    ```