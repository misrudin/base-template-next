import dynamic from 'next/dynamic';

const TextLink = dynamic(() => import('./TextLink'), { ssr: false });

export default TextLink;
