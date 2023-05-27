- Angulars HttpClient allows use to observe the full Response object instead of just the body.

  ```typescript
  this.client.get<Skill>(`${environment.api}skills`, {
    observe: 'response',
  }).subscribe((response: HttpResponse<any>) => {...});
  ```

- We can include customs headers in the request.

  ```typescript
  this.client.get<Skill>(`${environment.api}skills`, {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    })
  }).subscribe((response: HttpResponse<any>) => {...});
  ```
