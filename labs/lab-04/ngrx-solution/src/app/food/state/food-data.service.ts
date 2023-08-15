import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, DefaultDataServiceConfig, DefaultHttpUrlGenerator, DefaultPluralizer, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FoodItem } from '../food.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class FoodItemsDataService extends DefaultDataService<FoodItem> {
  private defaultDataServiceConfig: DefaultDataServiceConfig;

  constructor(http: HttpClient, defaultDataServiceConfig: DefaultDataServiceConfig) {
    const urlGenerator = new DefaultHttpUrlGenerator(new DefaultPluralizer([]));
    //const url = new DefaultHttpUrlGenerator();
    const urlRoot = defaultDataServiceConfig.root;
    const resourceUrls = {
      entityResourceUrl: `${environment.api}/food`,
      collectionResourceUrl: `${environment.api}/food`
    };
    urlGenerator.registerHttpResourceUrls({ ['Food']: resourceUrls });
    super('Food', http, urlGenerator);
    this.defaultDataServiceConfig = defaultDataServiceConfig;
  }

  override getAll() {
    return this.http.get<FoodItem[]>(`${environment.api}/food`).pipe(
      map((data: FoodItem[]) => {
        if (!data) {
          return [];
        }
        return (data as FoodItem[]).map((sk) => {
          return { ...sk };
        });
      })
    );
  }

  override add(FoodItem: FoodItem): Observable<FoodItem> {
    return this.http.post<FoodItem>(`${environment.api}/food`, FoodItem).pipe(
      map((data) => {
        return { ...FoodItem, id: data.id };
      })
    );
  }

  override update(FoodItem: Update<FoodItem>): Observable<FoodItem> {
    return this.http.put<FoodItem>(`${environment.api}/food/${FoodItem.id}`, {
      ...FoodItem.changes,
    });
  }

  override delete(id: string): Observable<string> {
    return this.http.delete(`${environment.api}/food/${id}`).pipe(
      map((data) => {
        return id;
      })
    );
  }
}
