import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-http-errors',
  templateUrl: './http-errors.component.html',
  styleUrls: ['./http-errors.component.scss'],
})
export class HttpErrorsComponent {
  http = inject(HttpClient);

  doCall() {
    this.http.get(' http://localhost:3000/temos').subscribe();
  }
}
