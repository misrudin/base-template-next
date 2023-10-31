export interface IRawProfile {
  id: string;
  name?: string;
  username?: string;
  phone?: string;
  email?: string;
  level?: string;
  status?: string;
}
export interface IParamUpdateProfile {
  name: string;
  gender: string;
  birthday: string;
  address?: string;
  address_id?: string;
  job: string;
}
export interface IParamUpdatePassword {
  old_password?: string;
  new_password?: string;
}
export interface IParamUpdatePhotoProfile {
  photo: string;
}

export interface IParamUpdatePhoneEmail {
  phone_email: string;
}

export interface IParamOtpUpdatePhoneEmail {
  otp: string;
}

export interface ICount {
  cart: number;
  wishlist: number;
  notification: number;
}

export interface IHistoryPoint {
  id: string;
  member_id: string;
  transaction_id: string;
  type: string;
  point: number;
  description: string;
  date: string;
}

export interface IParamGetHistoryPoint {
  page: number;
  length: number;
  search: string;
  start_date: string;
  end_date: string;
  filterDateType?: 'all' | 'month' | '3month' | 'custom';
}
