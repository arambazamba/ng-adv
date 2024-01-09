# Food App - Standalone Components

In this lab we will create a new Angular 17 project and we will create a navbar component and a sidebar component. We will use Angular Material for the navbar. We will also use json-server to create a fake backend. We will use the standalone configuration for the project.

## Guide

- Create a new project, use scss and do not use server side rendering

    ![ng-new](_images/ng-new.png)

- Go to `src/main.ts` and `src/app` and notice the standalone configuration, especially app.config.ts and app.routes.ts. Examine this files. Also notice tha `app.module.ts` is not present. 

- Create a navbar component in the shared folder. Notice that with a project that was create with Angular 17 all components are created as standalone components by default.

    ```bash
    ng g c shared/navbar
    ```

- Repeat this steps to create a home component and an about component in the root folder.

- Create a food component in the food folder and a sidebar component in the shared folder.

    ```bash
    ng g c food/food
    ```

- Replace the html in app.component.html with the following:

    ```html
    <div>
        <app-navbar></app-navbar>
    </div>
    <div class="mainrow">
        <div class="sidebar">
            <app-sidebar></app-sidebar>
        </div>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    </div>
    ```

- Add the following to the app.component.scss file:

    ```scss
    .navbar {
    background-color: lightblue;
    height: 10vh;
    }

    .sidebar {
    background-color: lightgrey;
    width: 180px;
    }

    .main {
    min-width: 80vw;
    flex-grow: 1;
    margin: 0 2rem;
    }

    .mainrow {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90vh;
    }
    ```

- Import the NavBar and Sidebar components to the app.component.ts file:

    ```typescript
    @Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent, SidebarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
    })
    ```

- Run ng s -o to check the result. At this point you should have a navbar and a sidebar in the app component but no content in the main section. Also they do not look very nice.

- In the `shared/navbar` folder create a `nav-item.model.ts`:

    ```bash
    export class NavItem {
        title = ''
        url = ''
    }
    ```

- In the `shared/navbar` folder create a `navbar.service.ts`:

    ```bash
    @Injectable({
    providedIn: 'root'
    })
    export class NavbarService {
    http = inject(HttpClient);

    getTopItems() {
        return this.http.get<NavItem[]>(`${environment.api}/top-links`);
        }
    }
    ```

- Add the environment configuration to the project:

    ```bash
    ng g environments
    ```    

- Modify the environment.development.ts file:

    ```bash
    export const environment = {
        api: 'http://localhost:3000',
    };
    ```

- Install json-server:

    ```bash
    npm i -g json-server
    ```

- Create a db.json file in the root folder:

    ```bash
    {
        "top-links": [
            {
                "title": "Home",
                "url": "/home"
            },
            {
                "title": "About",
                "url": "/about"
            },
            {
                "title": "Food",
                "url": "/food"
            }
        ]
    }
    ```

- Run json-server:     

    ```bash
    json-server --watch db.json
    ```        

- Add Angular Material to the project, chose a theme:

    ```bash
    ng add @angular/material
    ```

    ![ng-add-material](_images/ng-add-material.png)

- Inject the `NavbarService` in the `navbar.component.ts`:

    ```bash
    @Component({
        selector: 'app-navbar',
        standalone: true,
        imports: [AsyncPipe, RouterLink, MatToolbarModule],
        templateUrl: './navbar.component.html',
        styleUrl: './navbar.component.scss'
    })
        export class NavbarComponent {
        ns = inject(NavbarService);
        items = this.ns.getTopItems();
    }
    ```

- Modify the `navbar.component.html`:

    ```bash    
    <mat-toolbar color="primary">
        <mat-toolbar-row>
            @for (item of items | async; track item) {
            <div [routerLink]="[item.url]">
                {{ item.title }}
            </div>
            }
        </mat-toolbar-row>
    </mat-toolbar>
    ```

- Add the following styles to the `navbar.component.scss`:

    ```bash
    mat-toolbar {
        margin-bottom: 0.8rem;
    }

    mat-toolbar-row {
        div {
            margin: 0.5rem;
            cursor: pointer;
        }
    }
    ```

- Run ng s -o to check the result. Open the F12 Dev Tools to check the error. You will notice that there is no provider for the HttpClient. 

- Open app.config.ts and add the provideHttpClient() to the providers array:
   
    ```bash
    export const appConfig: ApplicationConfig = {
        providers: [
            provideHttpClient(),
            provideRouter(routes),
            provideAnimations()
        ]
    };
    ```

- Now this error is fixed but we still cannot use the NavBar component. We will have to update the routes in `app.routes.ts`:

    ```bash
    export const routes: Routes = [
        { path: "", component: HomeComponent },
        { path: "food", component: FoodComponent },
        { path: "about", component: AboutComponent }
    ];
    ```