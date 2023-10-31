import { NextPageContext } from 'next';

import { tokenExistsOrNot } from '@helpers/anonymous-token';

export const useDefaultSsr = async (
  context: NextPageContext,
  cb: any = { props: {} },
  checkToken: boolean = true,
) => {
  if (checkToken) {
    await tokenExistsOrNot(context);
  }

  return typeof cb === 'object'
    ? { ...cb, props: { ...cb.props } }
    : { ...(await cb()), props: { ...(await cb()).props } };
};
