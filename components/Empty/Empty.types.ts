import { FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

export interface IEmpty extends Omit<FlexProps, 'title'> {
  readonly title?: ReactNode;
  readonly description?: string;
  readonly imageUrl?: string;
  readonly isDashboard?: boolean;
  readonly isFullWidth?: boolean;
  readonly children?: ReactNode;
}
