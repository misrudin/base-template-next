import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const otpCounter = atom<number>({
  key: 'OTP/otpCounter',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
