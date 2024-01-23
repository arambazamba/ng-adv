import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voucher } from './voucher.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VouchersService {
  http = inject(HttpClient);

  getVouchers(): Observable<Voucher[]> {
    return this.http.get<Voucher[]>(`${environment.api}vouchers`);
  }

  getVoucher(id: number) {
    return this.getVouchers().pipe(
      map((v) => v.find((v: Voucher) => v.ID == id))
    );
  }
}
