import dynamic from 'next/dynamic';

export const FilterDate = dynamic(() => import('./FilterDate'), { ssr: false });
export const FilterOption = dynamic(() => import('./FilterOption'), {
  ssr: false,
});
