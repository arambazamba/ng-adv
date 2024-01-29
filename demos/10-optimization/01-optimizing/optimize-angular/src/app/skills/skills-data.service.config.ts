import { DefaultDataServiceConfig } from '@ngrx/data';
import { environment } from '../../environments/environment';

export const skillsDataServiceConfig: DefaultDataServiceConfig = {
    root: `${environment.api}/`,
    timeout: 3000,
    entityHttpResourceUrls: {
        Food: {
            entityResourceUrl: `${environment.api}/skills/`,
            collectionResourceUrl: `${environment.api}/skills`
        },
    }
}