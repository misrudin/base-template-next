export interface IMessage {
  readonly id: string;
  readonly en: string;
}

export interface ISingleBaseResponse<T> {
  readonly code: number;
  readonly msg: IMessage;
  readonly data?: T | null;
}

export interface IBaseResponse<T> {
  readonly code: number;
  readonly msg: IMessage;
  readonly data: T;
}

export interface IPagination<T> {
  readonly page: number;
  readonly length: number;
  readonly total_data: number;
  readonly total_page: number;
  readonly data: T;
}
