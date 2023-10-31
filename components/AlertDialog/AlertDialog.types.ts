import { AlertDialogProps } from '@chakra-ui/modal';
import { ReactNode } from 'react';

export interface IAlert extends Omit<AlertDialogProps, 'leastDestructiveRef'> {
  title?: string;
  onOk?: any;
  okText?: ReactNode;
  onClose: any;
  closeText?: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  leastDestructiveRef?: any;
  withButton?: boolean;
  dangerMode?: boolean;
}
