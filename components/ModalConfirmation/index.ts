import dynamic from 'next/dynamic';

const ModalConfirmation = dynamic(() => import('./ModalConfirmation'), {
  ssr: false,
});

export default ModalConfirmation;
