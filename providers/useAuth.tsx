import { noop } from 'lodash';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getCookies } from '@helpers/credentials';
import { AxiosResponse } from 'axios';
import { ISingleBaseResponse } from '@interfaces/IBaseResponse';
import { getMeProfileFromAPI } from '@libraries/api/profile/profile.api';
import { IRawProfile } from '@libraries/api/profile/profile.types';

interface IUseAuth {
  isAuth: boolean;
  isGuest: boolean;
  profile: IRawProfile | null;
  token: string;
  reFetch: () => void;
  resetProfile: () => void;
}

const AuthContext = createContext<IUseAuth>({
  isAuth: false,
  isGuest: true,
  token: '',
  profile: null,
  reFetch: noop,
  resetProfile: noop,
});

type TAuthProvider = {
  children: ReactNode;
  token: string;
};

export const AuthProvider: React.FC<TAuthProvider> = ({ children, token }) => {
  const [profile, setProfile] = useState<any | null>(null);
  const isGuest = getCookies('isGuest') === 'true' ? true : false;

  const getProfile = async () => {
    try {
      const response: AxiosResponse<ISingleBaseResponse<any>> =
        await getMeProfileFromAPI();
      if (response.status === 200) {
        setProfile(response.data.data);
      }
    } catch (error) {
      resetProfile();
    }
  };

  const resetProfile = () => setProfile(null);

  useEffect(() => {
    token && !isGuest && getProfile();
  }, [token, isGuest]);

  const value = {
    isAuth: !!token,
    isGuest,
    profile,
    reFetch: getProfile,
    token,
    resetProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IUseAuth => useContext(AuthContext);
