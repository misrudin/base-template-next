import dynamic from 'next/dynamic';

const ErrorMessage = dynamic(() => import('./ErrorMessage'), { ssr: false });

export default ErrorMessage;
