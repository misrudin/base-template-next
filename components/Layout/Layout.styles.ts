import { BoxProps, ContainerProps, HeadingProps } from '@chakra-ui/react';

export const layoutStyled = (): BoxProps => ({
  pos: 'relative',
  display: 'flex',
  flexDirection: 'column',
  bg: 'white',
  minH: '100vh',
  w: 'full',
});

export const continerStyled: ContainerProps = {
  maxW: 'full',
  px: '0',
  bg: 'white',
};

export const headingSectionStyled: HeadingProps = {
  as: 'h4',
  fontSize: 'md',
  fontWeight: 'semibold',
  mb: '6',
};
