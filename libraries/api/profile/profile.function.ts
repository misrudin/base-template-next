import { useInfiniteQuery, useMutation, useQuery } from 'react-query';

import {
  getCountFromAPI,
  getHistoryPointFromAPI,
  getMeProfileFromAPI,
  postOtpUpdateEmailFromAPI,
  postOtpUpdatePhoneFromAPI,
  putUpdateEmailFromAPI,
  putUpdatePasswordFromAPI,
  putUpdatePhoneFromAPI,
  putUpdatePhotoProfileFromAPI,
  putUpdateProfileFromAPI,
} from './profile.api';
import {
  ICount,
  IHistoryPoint,
  IParamGetHistoryPoint,
  IParamOtpUpdatePhoneEmail,
  IParamUpdatePassword,
  IParamUpdatePhoneEmail,
  IParamUpdatePhotoProfile,
  IParamUpdateProfile,
  IRawProfile,
} from './profile.types';
import { TInfiniteQuery } from '@interfaces/IQuery';
import { IPagination } from '@interfaces/IBaseResponse';

export const actionGetMeProfile = (isEnabled: boolean = false) =>
  useQuery('actionGetMeProfile', () => getMeProfileFromAPI(), {
    refetchOnWindowFocus: false,
    retry: false,
    select: (res) => (res?.data?.data as IRawProfile) ?? null,
    enabled: isEnabled,
  });

export const actionUpdateProfile = () =>
  useMutation((params: IParamUpdateProfile) => putUpdateProfileFromAPI(params));

export const actionUpdatePassword = () =>
  useMutation((params: IParamUpdatePassword) =>
    putUpdatePasswordFromAPI(params),
  );

export const actionUpdatePhotoProfile = () =>
  useMutation((params: IParamUpdatePhotoProfile) =>
    putUpdatePhotoProfileFromAPI(params),
  );

export const actionUpdatePhone = () =>
  useMutation((params: IParamUpdatePhoneEmail) =>
    putUpdatePhoneFromAPI(params),
  );

export const actionOtpUpdatePhone = () =>
  useMutation((params: IParamOtpUpdatePhoneEmail) =>
    postOtpUpdatePhoneFromAPI(params),
  );

export const actionUpdateEmail = () =>
  useMutation((params: IParamUpdatePhoneEmail) =>
    putUpdateEmailFromAPI(params),
  );

export const actionOtpUpdateEmail = () =>
  useMutation((params: IParamOtpUpdatePhoneEmail) =>
    postOtpUpdateEmailFromAPI(params),
  );

export const actionGetCount = (isEnabled: boolean = false) =>
  useQuery('actionGetCount', () => getCountFromAPI(), {
    refetchOnWindowFocus: true,
    retry: false,
    select: (res) => (res?.data?.data as ICount) ?? null,
    enabled: isEnabled,
  });

export const actionGetHistoryPoint = (
  params: IParamGetHistoryPoint,
): TInfiniteQuery<IPagination<IHistoryPoint[]>> =>
  useInfiniteQuery(
    ['actionGetListOrder', params],
    ({ pageParam = 1 }) => getHistoryPointFromAPI(params, pageParam),
    {
      getNextPageParam: (_lastPage, pages) => {
        if (
          pages.length !== _lastPage.data.data.total_page &&
          _lastPage.data.data.total_page !== 0
        ) {
          return pages.length + 1;
        } else {
          return undefined;
        }
      },
      refetchOnWindowFocus: false,
      retry: false,
    },
  );
