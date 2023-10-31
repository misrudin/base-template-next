import { NextPageContext } from 'next';
import nookies from 'nookies';
import isEmpty from 'lodash/isEmpty';
import isNil from 'lodash/isNil';

import { configEnv } from '@libraries/config';

import { windowLocalStorage, windowSessionStorage } from './window';
import { IRawProfile } from '@libraries/api/profile/profile.types';
import { IResponseLogin } from '@libraries/api/login/login.types';

export const keyToken = configEnv.keyToken;
export const keyProfile = configEnv.keyProfile;

export const setBasicToken = (
  token: string,
  tokenExpiredInMinutes: number,
  context?: object,
): void => {
  const minutes = 2;
  const subSeconds = 60 * minutes;
  const maxAge = tokenExpiredInMinutes * 60 - subSeconds;

  setCookies({ name: keyToken, value: token, maxAge, context });
};

export const setCookies = ({
  name,
  value,
  maxAge = 0,
  context = {},
}: {
  name: string;
  value: string;
  maxAge?: number;
  context?: object;
}) => {
  nookies.set(context, name, value, {
    maxAge,
    sameSite: false,
    path: '/',
  });
};

export const getCookies = (name: string, context?: object) => {
  const cookiesBrowser = nookies.get(context);
  return cookiesBrowser[name];
};

export const clearCookies = (context?: any) => {
  if (context?.req) {
    context?.res?.setHeader('set-cookie', []);
  } else {
    const cookies = nookies.get();
    const keys = Object.keys(cookies);

    if (keys) {
      keys.forEach((key: string) => setCookies({ name: key, value: '' }));
    }

    windowLocalStorage('clear');
    windowSessionStorage('clear');
  }
};

export const getBasicTokenString = (context?: NextPageContext): string => {
  if (context?.req) {
    const headerCookies = context?.req?.headers?.cookie;
    const value = `; ${headerCookies}`;
    const parts = value.split(`; ${keyToken}=`);
    return parts.length === 2 ? parts.pop().split(';').shift() : '';
  }
  return getCookies(keyToken, context);
};

export const saveCredentials = (credentials: IResponseLogin) => {
  if (credentials) {
    const maxAge = configEnv.tokenExpired * 60;
    setBasicToken(credentials.token, maxAge, {});
    windowLocalStorage('set', 'menu-admin', JSON.stringify(credentials.menu));
    setProfile({
      id: credentials.admin_id,
    });
  }
};

export const setProfile = (profile: IRawProfile) => {
  setCookies({
    name: keyProfile,
    value: JSON.stringify(profile),
    maxAge: 6000 * 60,
  });
};

export const getProfile = (context?: NextPageContext): IRawProfile | null => {
  let profileString = null;
  if (context?.req) {
    const headerCookies = context?.req?.headers?.cookie;
    const value = `; ${headerCookies}`;
    const parts = value.split(`; ${keyProfile}=`);
    const getProfileString =
      parts.length === 2 ? parts.pop().split(';').shift() : null;
    profileString = decodeURIComponent(getProfileString);
  } else {
    const cookieBrowser = getCookies(keyProfile, context);
    profileString =
      isNil(cookieBrowser) || isEmpty(cookieBrowser) ? null : cookieBrowser;
  }
  return JSON.parse(profileString);
};

export const getCookieSsr = (ctx: NextPageContext, name: string) => {
  return nookies.get(ctx)[name] ?? undefined;
};
