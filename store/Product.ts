import { atom } from 'recoil';

export const variantState = atom<string[]>({
  key: 'Product/variantState',
  default: new Array(),
});
