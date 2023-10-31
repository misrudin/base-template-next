import { NextPageContext } from 'next';
import nookies from 'nookies';

import { IMiddleware } from '@interfaces/IMiddleware';
import { configEnv } from '@libraries/config';

import { getProfile } from './credentials';

export const redirect = (url: string) => ({
  redirect: {
    destination: url,
    permanent: false,
  },
});

export const middleware = (
  ctx: NextPageContext,
  path: string,
  options: any = {},
): IMiddleware<any> => {
  const { url } = ctx.req;
  const newUrl = new URL(url, configEnv.baseUrl);
  const currentPath = newUrl.pathname;

  const profile = getProfile(ctx);

  const isNotInLoginPage = currentPath !== '/login' && !profile;
  if (isNotInLoginPage) {
    if (!profile) {
      nookies.destroy(ctx, configEnv.keyProfile);
      nookies.destroy(ctx, configEnv.keyToken);
    }
    return redirect(`/login?returnUrl=${path}`);
  }

  return {
    props: { ...options },
  };
};

export const middlewareLogin = (
  ctx: NextPageContext,
  options: any = {},
): IMiddleware<any> => {
  const { url } = ctx.req;
  const newUrl = new URL(url, configEnv.baseUrl);
  const path = newUrl.pathname;

  const profile = getProfile(ctx);

  const isLoggedIn =
    (path === '/login' ||
      path === '/login/otp' ||
      path === '/login/set-password') &&
    profile;

  if (isLoggedIn) {
    return redirect('/');
  }

  return {
    props: { ...options },
  };
};
