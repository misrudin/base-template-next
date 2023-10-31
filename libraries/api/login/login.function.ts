import { useMutation } from 'react-query';
import {
  IGuest,
  IParamForgotPassword,
  IParamLogin,
  IParamLoginWithPassword,
  IParamOTPLogin,
  IParamOTPRegister,
  IParamSetPassword,
} from './login.types';
import {
  postGetGuestFromAPI,
  postLoginFromAPI,
  postLoginMemberFromAPI,
  postLogoutFromAPI,
  postOTPLoginFromAPI,
  postOTPRegisterFromAPI,
  postOtpForgotPasswordFromAPI,
  postorgotPasswordFromAPI,
  putSetPasswordFromAPI,
} from './login.api';
import { AxiosResponse } from 'axios';
import { ISingleBaseResponse } from '@interfaces/IBaseResponse';

export const actionPostLogin = () =>
  useMutation((payload: IParamLogin) => postLoginFromAPI(payload));

export const actionPostLogout = async () => {
  try {
    const response: AxiosResponse = await postLogoutFromAPI();
    return response?.data;
  } catch (error: any) {
    // tslint:disable-next-line:no-console
    console.log(
      'Error actionPostLogout: ',
      error?.response?.data?.message || error,
    );
    return Promise.reject(error);
  }
};

export const actionPostOtpLogin = () =>
  useMutation((payload: IParamOTPLogin) => postOTPLoginFromAPI(payload));

export const actionPostOTPRegister = () =>
  useMutation((payload: IParamOTPRegister) => postOTPRegisterFromAPI(payload));

export const actionSetPassword = () =>
  useMutation((payload: IParamSetPassword) => putSetPasswordFromAPI(payload));

export const actionLoginWithPassword = () =>
  useMutation((payload: IParamLoginWithPassword) =>
    postLoginMemberFromAPI(payload),
  );

export const actionOtpForgotPassword = () =>
  useMutation((payload: IParamLogin) => postOtpForgotPasswordFromAPI(payload));

export const actionForgotPassword = () =>
  useMutation((payload: IParamForgotPassword) =>
    postorgotPasswordFromAPI(payload),
  );

export const actionGetGuest = async (
  context: object,
): Promise<IGuest | null> => {
  try {
    const response: AxiosResponse<ISingleBaseResponse<IGuest>> =
      await postGetGuestFromAPI(context);
    return Promise.resolve(response?.data?.data ?? null);
  } catch (error: any) {
    // tslint:disable-next-line:no-console
    console.log({
      error,
      module: '@api/login',
      func: '@api/login/login.function.ts/actionGetGuest',
      transactionName: 'actionGetGuest',
      path: '/libraries/api/login',
    });
    return Promise.reject(error);
  }
};
