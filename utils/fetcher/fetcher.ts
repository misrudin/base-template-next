import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { NextPageContext } from 'next';

import {
  clearCookies,
  getBasicTokenString,
  getProfile,
  keyToken,
} from '@helpers/credentials';
import { setWindowLocation } from '@helpers/window';
import { configEnv } from '@libraries/config';

type ListMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface IDefaultHeaders {
  Accept: string;
  'Content-Type': string;
  Authorization?: string;
}

export default interface IPayloadAPI {
  method: string;
  uri: string;
  params?: object;
  additionalHeader?: object;
}

export const setHeaders = (
  dataHeaders: IDefaultHeaders,
  token: string | undefined,
) => {
  if (token) {
    dataHeaders.Authorization = `${token}`;
  }
  return dataHeaders;
};

export const setAxiosOptions = (
  token: string,
): { headers: IDefaultHeaders } => ({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});

export const setParams = (params, method: ListMethods) => {
  const getMethods = ['GET', 'DELETE'];
  if (getMethods.includes(method)) {
    return {
      params,
    };
  }
  return {
    data: params,
  };
};

export const callAPI = async ({
  method,
  uri,
  params,
  additionalHeader,
  context = {},
  hostApi = '',
  servicePath = configEnv.service.admin,
  forceToken = '',
  signal,
}: any) => {
  const defaultHeaders: IDefaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  let url: string = `${hostApi}/${servicePath}`;
  if (uri) {
    url = url + `/${uri}`;
  }
  let headers = { ...defaultHeaders, ...additionalHeader };

  if (forceToken) {
    headers = setHeaders(headers, forceToken);
  } else if (typeof headers.auth === 'undefined') {
    let token = getBasicTokenString(context);
    if (context?.req) {
      token = context?.req?.cookies[keyToken]
        ? context?.req?.cookies[keyToken]
        : '';
    }
    headers = setHeaders(headers, token);
  } else {
    const userpass = Buffer.from(
      `${headers.auth.username}:${headers.auth.password}`,
    ).toString('base64');
    const basicAuth = `Basic ${userpass}`;
    headers = { ...headers, Authorization: basicAuth };
  }

  const dataOrParams = setParams(params, method.toUpperCase());
  const defaultConfig = { method, headers, url, retry: false };
  const config: AxiosRequestConfig = {
    ...defaultConfig,
    ...dataOrParams,
    signal,
  };
  const callbackError = (error: any) => callbackErrorFunction(error, context);
  axios.interceptors.response.use(returnResponse, callbackError);
  return axios(config);
};

export const returnResponse = (response: AxiosResponse) => response;

export const callbackErrorFunction = async (
  error: any,
  context?: NextPageContext,
) => {
  const profile = getProfile(context);
  const token = getBasicTokenString(context);
  const statusCode: number = error?.response?.status || 401;
  const resMessage: string = error?.response?.data?.message || '';

  if (statusCode === 401 && resMessage === 'Invalid value') {
    clearCookies(context);
    setWindowLocation('/login');
  }

  if (
    token &&
    profile &&
    statusCode === 401 &&
    !context?.req &&
    typeof window !== undefined
  ) {
    clearCookies(context);
    setTimeout(() => {
      setWindowLocation('/login');
    }, 500);
  }

  return Promise.reject(error);
};
