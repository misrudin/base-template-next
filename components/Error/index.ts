import dynamic from 'next/dynamic';

const Error = dynamic(() => import('./Error'));

export default Error;
