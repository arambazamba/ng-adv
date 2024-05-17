resource configapi_dev 'Microsoft.App/containerApps@2023-05-01' = {
  name: 'configapi-dev'
  location: 'West Europe'
  properties: {
    provisioningState: 'Succeeded'
    runningStatus: 'Running'
    managedEnvironmentId: '/subscriptions/78033352-805c-4acd-af80-f8f95083268d/resourceGroups/ng-adv/providers/Microsoft.App/managedEnvironments/ngadv-dev'
    environmentId: '/subscriptions/78033352-805c-4acd-af80-f8f95083268d/resourceGroups/ng-adv/providers/Microsoft.App/managedEnvironments/ngadv-dev'
    workloadProfileName: 'Consumption'
    outboundIpAddresses: [
      '51.137.8.84'
      '51.137.8.250'
      '40.114.177.194'
      '40.114.177.222'
      '20.8.61.140'
      '20.23.204.52'
      '20.103.135.29'
      '20.103.134.29'
      '20.103.132.54'
      '20.103.134.224'
      '4.175.88.205'
      '4.175.89.31'
      '4.175.89.19'
      '4.175.89.7'
      '20.31.237.60'
      '20.54.209.151'
    ]
    latestRevisionName: 'configapi-dev--22j9tnl'
    latestReadyRevisionName: 'configapi-dev--22j9tnl'
    latestRevisionFqdn: 'configapi-dev--22j9tnl.kindwave-5835b955.westeurope.azurecontainerapps.io'
    customDomainVerificationId: '1387F783D35B4E628CFECBEF659048D3844B3364AFAB806A32607A7B0D3AA59F'
    configuration: {
      secrets: [
        {
          name: 'acrngadvazurecrio-acrngadv'
        }
      ]
      activeRevisionsMode: 'Single'
      ingress: {
        fqdn: 'configapi-dev.kindwave-5835b955.westeurope.azurecontainerapps.io'
        external: true
        targetPort: 8080
        exposedPort: 0
        transport: 'Auto'
        traffic: [
          {
            weight: 100
            latestRevision: true
          }
        ]
        customDomains: null
        allowInsecure: false
        ipSecurityRestrictions: null
        corsPolicy: null
        clientCertificateMode: 'Ignore'
        stickySessions: {
          affinity: 'none'
        }
      }
      registries: [
        {
          server: 'acrngadv.azurecr.io'
          username: 'acrngadv'
          passwordSecretRef: 'acrngadvazurecrio-acrngadv'
          identity: ''
        }
      ]
      dapr: null
      maxInactiveRevisions: 100
      service: null
    }
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
    eventStreamEndpoint: 'https://westeurope.azurecontainerapps.dev/subscriptions/78033352-805c-4acd-af80-f8f95083268d/resourceGroups/ng-adv/containerApps/configapi-dev/eventstream'
    delegatedIdentities: []
  }
  identity: {
    type: 'None'
  }
}
