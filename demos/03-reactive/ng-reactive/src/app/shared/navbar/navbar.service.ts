import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { SidenNavItem } from '../sidenav/sidenavitem.model';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  service = inject(HttpClient);

  getTopItems(): Observable<SidenNavItem[]> {
    return this.service.get<SidenNavItem[]>(`${environment.apiUrl}top-links`);
  }
}
