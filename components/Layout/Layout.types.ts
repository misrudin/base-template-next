import { BoxProps } from '@chakra-ui/react';

export interface ILayout extends BoxProps {
  readonly title?: string;
  readonly description?: string;
  readonly imageUrl?: string;
  readonly urlCanonical?: string;
  readonly menuSelected?: string;
  readonly pageTitle?: string;
  readonly pageSubTitle?: string;
  readonly isNavbar?: boolean;
  readonly isSidebar?: boolean;
  readonly back?: any;
  readonly isNoShadow?: boolean;
  readonly children?: any;
}
