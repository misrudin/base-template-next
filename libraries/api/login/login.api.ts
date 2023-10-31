import { callAPIContent } from '@utils/fetcher/content';
import {
  IParamForgotPassword,
  IParamLogin,
  IParamLoginWithPassword,
  IParamOTPLogin,
  IParamOTPRegister,
  IParamSetPassword,
} from './login.types';
import { callAPISSRFetcher } from '@utils/fetcher/srr-fetcher';

export const postLoginFromAPI = (params: IParamLogin) => {
  const options = {
    method: 'POST',
    uri: 'login',
    params,
  };
  return callAPIContent(options);
};

export const postLogoutFromAPI = () => {
  const options = {
    method: 'POST',
    uri: 'logout',
    params: {},
  };
  return callAPIContent(options);
};

export const postOTPLoginFromAPI = (params: IParamOTPLogin) => {
  const options = {
    method: 'POST',
    uri: 'otp/login',
    params,
  };
  return callAPIContent(options);
};

export const postOTPRegisterFromAPI = (params: IParamOTPRegister) => {
  const options = {
    method: 'POST',
    uri: 'otp/register',
    params,
  };
  return callAPIContent(options);
};

export const putSetPasswordFromAPI = (params: IParamSetPassword) => {
  const options = {
    method: 'PUT',
    uri: 'password/new',
    params,
  };
  return callAPIContent(options);
};

export const postLoginMemberFromAPI = (params: IParamLoginWithPassword) => {
  const options = {
    method: 'POST',
    uri: 'login',
    params,
  };
  return callAPIContent(options);
};

export const postOtpForgotPasswordFromAPI = (params: IParamLogin) => {
  const options = {
    method: 'PUT',
    uri: 'forget',
    params,
  };
  return callAPIContent(options);
};

export const postorgotPasswordFromAPI = (params: IParamForgotPassword) => {
  const options = {
    method: 'POST',
    uri: 'forget',
    params,
  };
  return callAPIContent(options);
};

export const postGetGuestFromAPI = (context: object) => {
  const options = {
    method: 'POST',
    uri: 'guest',
    params: {},
    context,
  };
  if (context) return callAPISSRFetcher(options);
  return callAPIContent(options);
};
