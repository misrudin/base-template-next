import { CloseButtonProps } from '@chakra-ui/close-button';
import type { ReactNode } from 'react';

export const headerStyled = {
  fontSize: 'lg',
  fontFamily: 'Open Sans, sans-serif',
  fontWeight: 'bold',
  flex: '1',
  px: '0',
  py: '0',
};

export const closeStyled = (
  title?: ReactNode,
  isFullHeight: boolean = false,
): CloseButtonProps => ({
  ml: '4',
  position: 'relative',
  top: '0',
  right: '0',
  ...(!title && {
    ml: 'auto',
  }),
  ...(isFullHeight && {
    fontSize: 'md',
  }),
});

export const overlayStyled = (
  isFullHeight: boolean = false,
  height?: number,
) => ({
  ...(isFullHeight && { h: height }),
});

export const contentStyled = (
  isFullHeight: boolean = false,
  height?: number,
  placement?: string,
) => ({
  ...(placement === 'top' && {
    borderBottomRadius: isFullHeight ? '0' : '0',
  }),
  ...(placement === 'bottom' && {
    borderTopRadius: isFullHeight ? '0' : '2xl',
  }),
  ...(isFullHeight && { h: height }),
});

export const titleStyled = (
  isCloseable: boolean = false,
  hasBorder: boolean = false,
  isFullHeight: boolean = false,
  hasShadow: boolean = false,
) => ({
  align: 'center',
  justify: 'space-between',
  px: '4',
  py: '3',
  minH: '56px',
  ...(isCloseable &&
    hasBorder &&
    !isFullHeight && {
      borderBottom: '1px',
      borderColor: 'border',
      px: '0',
      mx: '4',
    }),
  ...(isFullHeight &&
    hasShadow && {
      boxShadow: '0px 6px 12px rgba(46, 67, 77, 0.1)',
    }),
});

export const bodyStyled = (
  isFullHeight: boolean = false,
  title?: ReactNode,
  isCloseable: boolean = false,
) => ({
  px: '4',
  ...(isFullHeight
    ? { py: '6' }
    : title && !isCloseable
    ? { pt: '2', pb: '4' }
    : { py: '4' }),
  ...(!isFullHeight && { maxH: 'calc(100vh - 128px)' }),
});

export const footerStyled = (
  ptFooter?: string,
  isShadowFooter: boolean = false,
) => ({
  px: '4',
  pt: ptFooter ?? '0',
  ...(isShadowFooter && {
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  }),
});
