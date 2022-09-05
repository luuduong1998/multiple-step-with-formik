import { InteractionRequiredAuthError } from '@azure/msal-browser';
import { loginRequest } from '../config/auth';
import { msalInstance } from '../routes';

if (typeof window !== 'undefined') {
  window.erbs_msal_did_request_interaction_login = false;
}

export const getTokenRedirect = async () => {
  try {
    let response;

    response = await msalInstance.handleRedirectPromise();

    if (response && response.idToken) {
      return response;
    }

    const account = msalInstance.getActiveAccount();

    if (!account) {
      throw Error(
        'No active account! Verify a user has been signed in and setActiveAccount has been called.',
      );
    }

    response = await msalInstance.acquireTokenSilent({
      ...loginRequest,
      account,
    });

    return response;
  } catch (error) {
    if (
      error instanceof InteractionRequiredAuthError &&
      !window.erbs_msal_did_request_interaction_login
    ) {
      window.erbs_msal_did_request_interaction_login = true;

      await msalInstance.acquireTokenRedirect({
        ...loginRequest,
        redirectStartPage: `${window.location.pathname}${window.location.search}`,
      });

      window.erbs_msal_did_request_interaction_login = false;
    }
  }

  return null;
};

export const doLogout = () => msalInstance.logoutRedirect();

export const getAzureAdUser = () => msalInstance.getActiveAccount();
