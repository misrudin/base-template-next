import dynamic from 'next/dynamic';

const Drawer = dynamic(() => import('./Drawer'), { ssr: false });

export default Drawer;
