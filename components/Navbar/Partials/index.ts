import dynamic from 'next/dynamic';

export const Search = dynamic(() => import('./Search'), { ssr: false });
export const Profile = dynamic(() => import('./Profile'), { ssr: false });
