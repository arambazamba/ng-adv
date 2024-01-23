import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MarkdownRendererComponent } from '../../../shared/markdown-renderer/markdown-renderer.component';
import { environment } from '../../../../environments/environment';
import { MarkdownService } from 'ngx-markdown';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss'],
  standalone: true,
  imports: [
    MarkdownRendererComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatButton,
    JsonPipe,
  ],
})
export class HttpClientComponent {
  http = inject(HttpClient);
  result: any;
  fname = '';
  token = 'mock-token';
  key = 'mock-key';

  observeResponse() {
    this.http.get(`${environment.api}skills`, {
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

    this.http
      .get(`${environment.api}skills`, { headers: header })
      .subscribe((data) => {
        console.log('Response using headers variable: ', data);
        this.result = data;
      });
  }
}
