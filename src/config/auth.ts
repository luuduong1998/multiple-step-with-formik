import {
  AuthenticationResult,
  BrowserCacheLocation,
  Configuration,
  EventMessage,
  EventType,
  PublicClientApplication,
  RedirectRequest,
} from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: 'my-application',
    authority: 'https://login.microsoftonline.com/',
    redirectUri: '/',
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
  },
};

// Scopes for id token to be used at MS Identity Platform endpoints
export const loginRequest: RedirectRequest = {
  scopes: ['openid', 'email', 'profile'],
};

// Endpoints for MS Graph API services
export const graphConfig = {
  graphMeEndpoint: '/',
};

/**
 * Instantiates the PublicClientApplication object
 * and subscribes for `LOGIN_SUCCESS`
 * @returns MSAL Instance
 */
export const initMsal = () => {
  const msalInstance = new PublicClientApplication(msalConfig);

  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    msalInstance.setActiveAccount(accounts[0]);
  }

  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult;
      const { account } = payload;
      msalInstance.setActiveAccount(account);
    }
  });

  return msalInstance;
};
