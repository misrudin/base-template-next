import type { DrawerProps, ModalProps } from '@chakra-ui/modal';
import { IModal } from '@components/Modal/Modal.types';
import type { ReactNode } from 'react';

export interface IDrawer extends DrawerProps, IModal {
  title?: ReactNode;
  isCloseable?: boolean;
  hasBorder?: boolean;
  footer?: ReactNode;
  isBack?: boolean;
  action?: ReactNode;
  zIndexOverlay?: number;
  zIndexContent?: number;
  hasShadow?: boolean;
  ptFooter?: string;
  isShadowFooter?: boolean;
  isLoadingBack?: boolean;
  isResponsive?: boolean;
  size?: ModalProps['size'];
  onClose: IModal['onClose'];
  bodyStyle?: object;
}
