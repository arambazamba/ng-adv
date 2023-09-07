import { Injectable } from '@angular/core';
import { AppConfig } from './app.config.model';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { SnackbarService } from '../shared/snackbar/snackbar.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  cfg: AppConfig = new AppConfig();

  constructor(private httpClient: HttpClient, private sbs: SnackbarService) { }

  loadConfig() {
    return this.httpClient
      .get<AppConfig>('./assets/config.json')
      .pipe(
        catchError((err: Error) => {
          this.sbs.displayAlert('Startup Err', 'config.json not found');
          return of(true);
        })
      )
      .toPromise()
    // .then((config: AppConfig) => {
    //   this.cfg = config;
    // });
  }
}
