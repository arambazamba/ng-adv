declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  funcWebhookEP: window['env']["FUNC_EP"] || 'https://foodorders-7714.azurewebsites.net/api',
};
