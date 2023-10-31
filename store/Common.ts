import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const modalPromoHomepage = atom<boolean>({
  key: 'Common/modalPromoHomepage',
  default: false,
  effects_UNSTABLE: [persistAtom],
});
