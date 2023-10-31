import { callAPIContent } from '@utils/fetcher/content';

import {
  IParamGetHistoryPoint,
  IParamOtpUpdatePhoneEmail,
  IParamUpdatePassword,
  IParamUpdatePhoneEmail,
  IParamUpdatePhotoProfile,
  IParamUpdateProfile,
} from './profile.types';

export const getMeProfileFromAPI = () => {
  const options = {
    method: 'GET',
    uri: 'profile',
  };
  return callAPIContent(options);
};

export const putUpdateProfileFromAPI = (params: IParamUpdateProfile) => {
  const options = {
    method: 'PUT',
    params,
  };
  return callAPIContent(options);
};

export const putUpdatePasswordFromAPI = (params: IParamUpdatePassword) => {
  const options = {
    method: 'PUT',
    uri: 'password',
    params,
  };
  return callAPIContent(options);
};

export const putUpdatePhotoProfileFromAPI = (
  params: IParamUpdatePhotoProfile,
) => {
  const options = {
    method: 'PUT',
    uri: 'photo',
    params,
  };
  return callAPIContent(options);
};

export const putUpdatePhoneFromAPI = (params: IParamUpdatePhoneEmail) => {
  const options = {
    method: 'PUT',
    uri: 'update/phone',
    params,
  };
  return callAPIContent(options);
};

export const postOtpUpdatePhoneFromAPI = (
  params: IParamOtpUpdatePhoneEmail,
) => {
  const options = {
    method: 'POST',
    uri: 'update/phone',
    params,
  };
  return callAPIContent(options);
};

export const putUpdateEmailFromAPI = (params: IParamUpdatePhoneEmail) => {
  const options = {
    method: 'PUT',
    uri: 'update/email',
    params,
  };
  return callAPIContent(options);
};

export const postOtpUpdateEmailFromAPI = (
  params: IParamOtpUpdatePhoneEmail,
) => {
  const options = {
    method: 'POST',
    uri: 'update/email',
    params,
  };
  return callAPIContent(options);
};

export const getCountFromAPI = () => {
  const options = {
    method: 'GET',
    uri: 'count',
  };
  return callAPIContent(options);
};

export const getHistoryPointFromAPI = (
  params: IParamGetHistoryPoint,
  pageParam?: number,
) => {
  const newParams = { ...params };
  if (pageParam) {
    newParams.page = pageParam;
  }
  delete newParams.filterDateType;
  const options = {
    method: 'GET',
    servicePath: 'point',
    params: newParams,
  };
  return callAPIContent(options);
};
