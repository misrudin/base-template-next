import { FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface IError extends FlexProps {
  readonly title?: string;
  readonly description?: ReactNode;
  readonly imageUrl?: string;
  readonly message?: string;
  readonly children: ReactNode;
}
