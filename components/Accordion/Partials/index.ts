import dynamic from 'next/dynamic';

export const AccordionItem = dynamic(() => import('./AccordionItem'), {
  ssr: true,
});
