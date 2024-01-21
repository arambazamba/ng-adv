# NgRx Data

## Scaffold and Preparation

- Create project:

  ```bash
  ng new ngrx-data-standalone --routing=false --style=scss --ssr=false
  ```

- Copy `db.json` to the root folder. Make sure json-server is installed globally:

  ```bash
  npm i -g json-server
  ```

- Run json-server in a separate terminal:

  ```bash
  json-server db.json --watch
  ```    

- Add the environments configuration:

  ```bash
  ng g environments
  ```

- Add the default url to environment.ts and environment.development.ts:

  ```typescript
  export const environment = {
    url: 'http://localhost:3000',
  };
  ```  

- Add support for `HttpClient` to the providers array of `app.config.ts`:

  ```typescript
  provideHttpClient(),
  ```

- Add a `skills/skills.component.ts` using the Angular CLI and add it to app.component.html. Add the required imports and styles on your own:

```html
<div class="container">
  <h2>The skills:</h2>
  <app-skills></app-skills>
</div>
```

- Add the base NgRx modules:

```bash
npm i -S @ngrx/store @ngrx/entity @ngrx/effects
npm i -D @ngrx/store-devtools
```

- Add the basic NgRx setup to to the providers array of `app.config.ts`. Add missing imports. The import for the NgRx Dev tools will be `import { provideStoreDevtools } from '@ngrx/store-devtools';`:

  ```typescript
  provideStore(),
  provideEffects(),
  provideStoreDevtools(),
  ```

  >Note: Make sure that you have the [Redux Dev Tools](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?pli=1) installed in your browser. 

- Commit your changes to your local git repository:

  ```bash
  git add .
  git commit -m "Basic scaffold"
  ```

- Add @ngrx/data:

  ```bash
  ng add @ngrx/data
  ```

- Examine the changes made by the schematic in `app.config.ts`

>Note: You can use the db.json located in this folder

## Add ngrx/data with a base EntityDataService

Add `skills/skills.model.ts`:

```typescript
export interface Skill {
  id: number;
  name: string;
  completed: boolean;
}
```

Create skills metadata in `skills/skills.metadata.ts`:

```typescript
import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';
import { Skill } from './skills.model';

export function sortByName(a: Skill, b: Skill): number {
  let comp = a.name.localeCompare(b.name);
  return comp;
}

const entityMetadata: EntityMetadataMap = {
  Skill: {
    selectId: (skill: Skill) => skill.id,
    sortComparer: sortByName,
  },
};

const pluralNames = {};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};
```

Register NgRx StoreModule and EntityDataModule in `app.module.ts`:

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    environment.production ? [] : StoreDevtoolsModule.instrument(),
  ],
```

@ngrx/data expects rest urls in the format `/api/{entityName}/{id}`. To change this behavior, you can create a CustomurlHttpGenerator.

Add a custom URL Generator in `skills/custom-urlgenerator.ts`. 

```typescript
@Injectable()
export class CustomurlHttpGenerator extends DefaultHttpUrlGenerator {
  constructor(pluralizer: Pluralizer) {
    super(pluralizer);
  }

  protected override getResourceUrls(
    entityName: string,
    root: string,
    trailingSlashEndpoints?: boolean
  ): HttpResourceUrls {
    let resourceURLs = this.knownHttpResourceUrls[entityName];
    if (entityName == 'Skill') {
      resourceURLs = {
        collectionResourceUrl: 'http://localhost:3000/skills/',
        entityResourceUrl: 'http://localhost:3000/skills/',
      };
      this.registerHttpResourceUrls({ [entityName]: resourceURLs });
    }
    return resourceURLs;
  }
}
```

The custom URL generator needs to be registered in `app.module.ts`:

```typescript
providers: [
  {
    provide: HttpUrlGenerator,
    useClass: CustomurlHttpGenerator,
  },
],
```

Create the EntityDataService in `skills-entity.service.ts`. If you do not want to override the methods, that is all you will have to do in order to load entity data.

  ```typescript
  @Injectable({
    providedIn: 'root',
  })
  export class SkillsEntityService extends EntityCollectionServiceBase<Skill> {
    constructor(factory: EntityCollectionServiceElementsFactory) {
      super('Skill', factory);
    }
  }
  ```

Implement the User Interface that uses the SkillsEntityService:

![base-ui](_images/base-ui.jpg)

Add the following html to `skills/skills.component.html`:

```html
<h2>Skills</h2>

<div class="container">
  <div>
    <button (click)="addSkill()">Add Skill</button>
  </div>

  <div *ngFor="let sk of skills$ | async">
    <div class="row">
      <div class="label">{{ sk.name }}</div>
      <button (click)="deleteSkill(sk)">Delete</button>
    </div>
  </div>
</div>
```

Add a `skills/skills.component.ts` using the Angular CLI and add the following code to it:

```typescript
export class SkillsComponent implements OnInit {
  skills$: Observable<Skill[]>;
  skillsService: EntityCollectionService<Skill>;

  constructor(es: SkillsEntityService) {
    this.skillsService = es;
    this.skills$ = this.skillsService.entities$;
  }

  ngOnInit(): void {
    this.skillsService.getAll();
  }

  addSkill() {
    this.skillsService.add({ id: 0, name: '@ngrx/data', completed: false });
  }

  deleteSkill(item: Skill) {
    this.skillsService.delete(item);
  }
}
```

Add the skills component to `app.component.html`:

```html
<div class="content" role="main">
  <app-skills></app-skills>
</div>
```
