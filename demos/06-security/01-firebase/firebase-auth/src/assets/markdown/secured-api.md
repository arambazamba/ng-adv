Navigate to `../demo-api/` in a new prompt or terminal, start the api:

```
dotnet run
```

The api is also using Firebase Auth which is configured in Startup.cs:

```csharp
var fbProjectId = Configuration["FirebaseProjectId"];
services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = "https://securetoken.google.com/" + fbProjectId;
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = "https://securetoken.google.com/" + fbProjectId,
            ValidateAudience = true,
            ValidAudience = fbProjectId,
            ValidateLifetime = true
        };
    });
```

> Note: You must be loggedIn to access the api.