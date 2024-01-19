# Deploy Angular to Azure Static WebApps

This is a simple Angular app located the the repository [https://github.com/arambazamba/angular-devops](https://github.com/arambazamba/angular-devops) which is used to demonstrate the deployment to Azure Static WebApps.

- It uses URL Rewriting in Angular which is implemented in `src/assets/staticwebapp.config.json`. It contains the configuration for the Azure Static Web App. Examine the URL Rewriting rules:

  ```json
  {
    "navigationFallback": {
      "rewrite": "/index.html",
      "exclude": ["/assets/*"]
    },
    "responseOverrides": {
      "404": {
        "rewrite": "/index.html",
        "statusCode": 200
      }
    }
  }
  ```

## Deployment

- Login to Azure and use your credentials:

  ```bash
  az login
  ```

- Create the Static WebApp by execution `create-static-web-app.azcli`. The script extracts a deployment token that you will use in your Azure DevOps pipeline:

  ```bash
  grp=ng-adv
  loc=westeurope
  app=angular-app-$RANDOM
  az group create -n $grp -l $loc
  az staticwebapp create -n $app -g $grp
  token=$(az staticwebapp secrets list --name $app --query "properties.apiKey")
  echo "Deployment Token: $token"
  ```

- Import `angular-ci-cd-swa.yml` into your Azure Devops tenant. It builds and deploys the app to Azure Static Web Apps. It uses the deployment token from the previous step.

  >Note: You need to replace the `<path-to-angular-app>` with the path to your Angular app.

  ```yaml
  name: Deploy UI to Static Website

  trigger:
    branches:
      include:
        - master

    paths:
      include:
        - '<path-to-angular-app>'

  pr: none      

  pool:
    vmImage: "ubuntu-latest"

  variables:
    nodeVer: '16.20.0'
    apploc: '<path-to-angular-app>'
    webApiUrl: 'https://mockapi.azurewebsites.net'
    deploymentToken: '<enter-token-here>'

  stages:
  - stage: Build
    displayName: Build Angular

    jobs:
      - job: Build
        steps:
        - task: NodeTool@0
          inputs:
            versionSpec: $(nodeVer)
          displayName: Install Node $(nodeVer)        
        - task: replacetokens@5
          displayName: Update Config
          inputs:
            rootDirectory: '$(System.DefaultWorkingDirectory)/$(apploc)'
            targetFiles: '**/*.prod.ts'
            encoding: 'auto'
            tokenPattern: 'doublebraces'
            writeBOM: true
            actionOnMissing: 'warn'
            keepToken: false
            actionOnNoFiles: 'continue'
            enableTransforms: false
            enableRecursion: false
            useLegacyPattern: false
            enableTelemetry: true
        - task: Cache@2
          inputs:
              key: '$(System.DefaultWorkingDirectory)/$(apploc)package-lock.json'
              path: '$(System.DefaultWorkingDirectory)/$(apploc)node_modules'
              cacheHitVar: 'npmCache'
        - script: npm install
          displayName: 'npm i'
          workingDirectory: $(apploc)
          condition: eq(variables['npmCache'],False)
        - script: npm run build-prod
          displayName: 'Build App'
          workingDirectory: $(apploc)
        - task: PublishBuildArtifacts@1
          inputs:
            PathtoPublish: $(apploc)dist/maintenance-ui
            ArtifactName: 'ngapp'
            publishLocation: 'Container'
          displayName: 'Publish Artifacts'

  - stage: Deploy
    displayName: Deploy to static WA
    jobs:
      - job: Deploy
        steps:
          - checkout: self
            submodules: true
          - task: DownloadPipelineArtifact@2
            inputs:
              buildType: 'current'
          - task: AzureStaticWebApp@0
            inputs:
              workingDirectory: '$(Pipeline.Workspace)'
              app_location: 'ngapp'
              config_file_location: 'ngapp/assets/'
              skip_app_build: true
              skip_api_build: true
              azure_static_web_apps_api_token: '$(token)'
  ```
