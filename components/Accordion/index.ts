import dynamic from 'next/dynamic';

const Accordion = dynamic(() => import('./Accordion'), { ssr: false });

export default Accordion;
