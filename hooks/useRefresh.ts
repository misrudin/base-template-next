import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useRefresh = (): (() => Promise<boolean>) => {
  const { asPath } = useRouter();
  const router = useRouter();

  return useCallback(() => router.replace(asPath), [asPath, router]);
};
