import { AxiosError, AxiosResponse } from 'axios';
import { UseInfiniteQueryResult, UseQueryResult } from 'react-query';
import { IBaseResponse, ISingleBaseResponse } from './IBaseResponse';

export interface IReactQuery<T> {
  isError: boolean;
  isIdle: boolean;
  isLoading: boolean;
  isFetching: boolean;
  error: AxiosError<ISingleBaseResponse<T>>;
  data: AxiosResponse<IBaseResponse<T>>;
  refetch: any;
}

export type TReactQuery<T> = UseQueryResult<
  AxiosResponse<IBaseResponse<T> | ISingleBaseResponse<T>>,
  AxiosError<IBaseResponse<T> | ISingleBaseResponse<T>>
>;

export type TReactQueryPlan<T1, T2> = UseQueryResult<
  AxiosResponse<T1>,
  AxiosError<T2>
>;

export type TInfiniteQuery<T> = UseInfiniteQueryResult<
  AxiosResponse<IBaseResponse<T>>
>;
