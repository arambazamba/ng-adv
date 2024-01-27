- Show the use of Store<SkillsState>, explain the simplified @ngrx/data approach

- Show registration in app.module.ts:

    ```typescript
    @NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [
        ...
        StoreModule.forRoot(reducers),
        EffectsModule.forRoot([]),
        EntityDataModule.forRoot({}),
    ```    

- Explain `skills-entity.service.ts`:

    ```typescript
    @Injectable({providedIn: 'root'})
    export class SkillsEntityService extends EntityCollectionServiceBase<Skill> {
        constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
            super('Skill', serviceElementsFactory);
        }
    }
    ```

    >Note: Mention that there is a tutorial which is based on `SkillsEntityService`. Explain when to use a CustomDataService

- Explain: and `skills-data.service.ts`

    ```typescript
    @Injectable()
    export class SkillsDataService extends DefaultDataService<Skill> {
        constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
            super('Skill', http, httpUrlGenerator);
        }

        override getAll(): Observable<Skill[]> {
            return this.http.get(environment.skillsApi).pipe(
            map((data) => {
        ...
    ```
- Examine registration of @ngrx/data in `app.config.ts`:

    ```typescript
    provideEntityData(skillsEntityConfig, withEffects()),
    { provide: DefaultDataServiceConfig, useValue: skillsDataServiceConfig },
    ```
- Discuss initial loading in `skills-container.component.ts`

    ```typescript
    export class SkillsContainerComponent {
        skills: Observable<Skill[]>;
        constructor(private skillsService: SkillsEntityService) {
            this.skills = this.skillsService.entities$;
        }
        ngOnInit(): void {
            this.skillsService.getAll();
        }
    ```