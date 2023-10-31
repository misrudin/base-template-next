import type { BoxProps, LinkProps } from '@chakra-ui/react';

interface IStyle {
  readonly isLoginSimple?: boolean;
  readonly isSelected?: boolean;
  readonly isOpen?: boolean;
  readonly isMulti?: boolean;
  readonly isMobile?: boolean;
  height?: number;
  y?: number;
}

export const navbarStyles: BoxProps = {
  bg: 'white',
  w: 'full',
  as: 'nav',
  pos: 'sticky',
  top: 0,
  zIndex: 999,
  transition: '.2s',
  borderBottom: '1px',
  borderColor: 'border',
  h: '60px',
  px: '6',
};

export const badgeCartStyle: BoxProps = {
  pos: 'absolute',
  top: '-10px',
  right: '-10px',
  minW: '20px',
  rounded: 'full',
  bg: 'red',
  fontSize: '9px',
  fontWeight: 'medium',
  textAlign: 'center',
  border: '1px',
  borderColor: 'white',
  color: 'white',
};

export const linkStyled = ({
  isSelected,
  isMulti,
  isMobile,
}: IStyle): LinkProps => ({
  color: isSelected ? 'font.primary' : '',
  display: 'flex',
  justifyContent: isMulti ? 'flex-start' : 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '3',
  pos: 'relative',
  pb: '6px',
  pt: '8px',
  px: isMulti ? '6px' : '0',
  ...(isSelected &&
    !isMulti &&
    !isMobile && {
      _after: {
        content: '" "',
        bg: 'font.primary',
        w: '100%',
        h: '2px',
        pos: 'absolute',
        bottom: '0px',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: '1s ease',
        animation: '',
      },
    }),
  _hover: {
    color: 'font.primary',
  },
});
