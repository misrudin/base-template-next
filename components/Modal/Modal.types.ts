import { ModalProps } from '@chakra-ui/modal';
import { ReactNode } from 'react';

export interface IModal extends ModalProps {
  title?: ReactNode;
  onOk?: any;
  okText?: ReactNode;
  okType?: string;
  okVariant?: string;
  onClose: any;
  closeText?: ReactNode;
  closeType?: string;
  closeVariant?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isNoFooter?: boolean;
  isNoHeader?: boolean;
  width?: string;
  isNoClose?: boolean;
  isFooterFull?: boolean;
  colorCloseButton?: string;
  roundedOkButton?: string;
  download?: any;
  bodyPadding?: string;
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
  onBack?: () => void;
  bodyStyle?: object;
}
