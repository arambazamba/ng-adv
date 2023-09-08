# Kubernetes

Use `<your-docker-id>/config-ui`-image created earlier this module.

## Demos

- Kubernetes - Explain config-ui.yaml
- Use Kubernetes ConfigMap to inject config into Angular UI
- Deploy to Azure Kubernetes Services using Azure CLI Script `create-aks-cluster.sh`

config-ui.yaml:
```yaml
kind: ConfigMap 
apiVersion: v1 
metadata:
  name: config-ui 
data:
  ENV_API_URL: https://food-api-staging-4591.azurewebsites.net
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: config-ui
spec:
  replicas: 1
  selector:
    matchLabels:
      app: config-ui
  template:
    metadata:
      labels:
        app: config-ui                 
    spec:
      containers:
      - name: config-ui
        image: <your-docker-id>/config-ui
        imagePullPolicy: Always
        envFrom:
        - configMapRef:
            name: config-ui-map
        ports:
        - containerPort: 80        
        resources:
          limits:            
            cpu: "500m"
            memory: "128Mi"
---
apiVersion: v1
kind: Service
metadata:
  name: config-ui-lb
spec:
  type: LoadBalancer
  ports:
  - port: 8081
    targetPort: 80
  selector:
    app: config-ui
---
```

Create the AKS cluster by executing `create-aks-cluster.azcli`

![cluster.png](_images/cluster.png)

Browse the app on its external ip:

![app.png](_images/app.png)