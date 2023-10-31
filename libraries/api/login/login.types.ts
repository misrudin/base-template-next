import { IMenu } from '@interfaces/IMenu';

export interface IParamLogin {
  user: string;
  password: string;
}

export interface IParamOTPLogin {
  member_id: string;
  otp: string;
}

export interface IParamOTPRegister {
  phone_email: string;
  otp: string;
}

export interface IParamLoginWithPassword {
  member_id: string;
  password: string;
}

export interface IParamSetPassword {
  password: string;
}

export interface IResponseLogin {
  admin_id: string;
  token: string;
  menu: IMenu[];
}

export interface IParamForgotPassword {
  member_id: string;
  new_password: string;
  confirm_password: string;
  otp: string;
}

export interface IGuest {
  guest_id: string;
  token: string;
  expired: string;
}
