param env string = 'dev'
param loc string =  resourceGroup().location
param acrName string = 'acrngadv'
param acaenv string = 'ngadv-${env}'
param apiimg string = '${acrName}.azurecr.io/config-api'
param uiimg string = '${acrName}.azurecr.io/config-ui'

resource acr 'Microsoft.ContainerRegistry/registries@2021-06-01-preview' = {
  name: acrName
  location: loc
  sku: {
    name: 'Basic'
  }
  properties: {
    adminUserEnabled: true
  }
}

resource containerAppEnv 'Microsoft.App/containerApps@2024-03-01' = {
  name: acaenv
  location: loc
}

resource configApi 'Microsoft.App/containerApps@2024-03-01' = {
  name: 'configapi-${env}'
  location: loc
  properties: {
    configuration: {
      ingress: {
        external: true
        targetPort: 8080
      }
    }
    environmentId: containerAppEnv.id
    template: {
      revisionSuffix: ''
      terminationGracePeriodSeconds: null
      containers: [
        {
          image: 'acrngadv.azurecr.io/config-api'
          name: 'configapi-dev'
          resources: {
            cpu: '0.5'
            memory: '1Gi'
            ephemeralStorage: '2Gi'
          }
        }
      ]
      initContainers: null
      scale: {
        minReplicas: null
        maxReplicas: 10
        rules: null
      }
      volumes: null
      serviceBinds: null
    }
    registryCredentials: {
      server: acr.properties.loginServer
      username: acrName
      passwordSecretRef: 'acrPassword'
    }
  }
}

resource configUi 'Microsoft.App/containerApps@2024-03-01' = {
  name: 'configui-${env}'
  location: loc
  properties: {
    configuration: {
      ingress: {
        external: true
        targetPort: 80
      }
    }
    environmentId: containerAppEnv.id
    image: uiimg
    registryCredentials: {
      server: acr.properties.loginServer
      username: acrName
      passwordSecretRef: 'acrPassword'
    }
    template: {
      containers: [
        {
          name: 'configui'
          env: [
            {
              name: 'ENV_API_URL'
              value: 'https://${configApi.properties.configuration.ingress.fqdn}/'
            }
          ]
        }
      ]
    }
  }
}

output apiUrl string = 'https://${configApi.properties.configuration.ingress.fqdn}/'
