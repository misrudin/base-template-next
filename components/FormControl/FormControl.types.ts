import { FormControlProps } from '@chakra-ui/form-control';
import { ReactNode } from 'react';

export interface IFormControl extends Omit<FormControlProps, 'label'> {
  label?: ReactNode;
  sublabel?: ReactNode;
  extra?: ReactNode;
  help?: ReactNode;
  isOptional?: boolean;
  colorExtra?: string;
  sizeExtra?: string;
  isLoading?: boolean;
}
