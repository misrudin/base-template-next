import dynamic from 'next/dynamic';

const SocialMedia = dynamic(() => import('./SocialMedia'), { ssr: false });

export default SocialMedia;
