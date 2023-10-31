import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('./Layout'), { ssr: true });

export default Layout;
