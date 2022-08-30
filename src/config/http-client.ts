/* eslint-disable operator-linebreak */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
import axios from 'axios';
import { stringify } from 'query-string';
import { getTokenRedirect } from '../api/auth';

if (typeof window !== 'undefined') {
  window.erbs_msal_did_request_token_redirect = false;
}

const httpClient = axios.create({
  baseURL: '/',
  // timeout: TIMEOUT,
  paramsSerializer(params) {
    return stringify(params, { arrayFormat: 'none' });
  },
});

httpClient.interceptors.request.use(request => {
  return getTokenRedirect()
    .then(response => {
      if (response?.idToken) {
        Object(
          request,
        ).headers.Authorization = `${response.tokenType} ${response.idToken}`;
      }

      return request;
    })
    .catch(err => {
      throw err;
    });
});

httpClient.interceptors.response.use(
  response => {
    if (
      typeof response?.data === 'string' &&
      response.data.startsWith('<!DOCTYPE')
    ) {
      // Temporary solution while server routing will be correctly configured
      return Promise.reject(response);
    }
    return response;
  },
  error => {
    throw error;
  },
);

export default httpClient;
