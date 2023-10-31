import dynamic from 'next/dynamic';

const GeneralError = dynamic(() => import('./GeneralError'), { ssr: false });

export default GeneralError;
