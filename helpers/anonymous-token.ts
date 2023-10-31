import { NextPageContext } from 'next';

import { getBasicTokenString } from './credentials';

export const getAnonToken = async (context?: NextPageContext | any) => {
  let token = getBasicTokenString(context);

  return token;
};

export const tokenExistsOrNot = async (ctx?: NextPageContext) =>
  await getAnonToken(ctx);
