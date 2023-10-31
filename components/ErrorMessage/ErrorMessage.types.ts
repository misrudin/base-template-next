import { FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface IErrorMessage extends FlexProps {
  readonly title?: string;
  readonly description?: ReactNode;
  readonly imageUrl?: string;
  readonly message?: string;
}
