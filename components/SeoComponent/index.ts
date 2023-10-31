import dynamic from 'next/dynamic';

const Seo = dynamic(() => import('./Seo'));

export default Seo;
