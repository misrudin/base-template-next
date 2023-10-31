import dynamic from 'next/dynamic';

const Upload = dynamic(() => import('./Upload'), { ssr: false });

export default Upload;
