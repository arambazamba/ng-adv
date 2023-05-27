import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Skill } from 'src/app/skills/skill.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
})
export class HttpClientComponent {
  client = inject(HttpClient);
  result: any;
  fname = '';
  token = 'mock-token';
  key = 'mock-key';

  observeResponse() {
    this.client.get(`${environment.api}skills`, {
      observe: 'response',
    })
      .subscribe((response: HttpResponse<any>) => {
        this.result = response;
        console.log('Response using {observe: "response"}: ', response);
        console.log('Response body: ', response.body);
      });
  }

  usingHeadersHttpClient() {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      'subscription-key': this.key
    });

    this.client
      .get(`${environment.api}skills`, { headers: header })
      .subscribe((data) => {
        console.log('Response using headers variable: ', data);
        this.result = data;
      });
  }
}
