declare global {
  interface Window {
    env: any;
  }
}

export const environment = {
  production: true,
  funcWebhookEP: window['env'].FUNC_EP,
};
