import { FlexProps, HeadingProps, TextProps } from '@chakra-ui/react';

interface IStyle {
  readonly isDashboard?: boolean;
  readonly isFullWidth?: boolean;
  readonly isTitle?: boolean;
}

export const emptyStyled = ({ isFullWidth }: IStyle): FlexProps => ({
  align: 'center',
  justify: 'center',
  flexDir: 'column',
  mx: 'auto',
  maxW: '300px',
  w: '100%',
  py: '6',
  ...(isFullWidth && {
    maxW: 'unset',
  }),
});

export const bodyStyled = ({ isDashboard, isTitle }: IStyle): FlexProps => ({
  mt: isTitle ? '4' : '0',
  flexDir: 'column',
  align: 'center',
  w: 'full',
});

export const headingStyled: HeadingProps = {
  as: 'h1',
  size: 'lg',
  textAlign: 'center',
  mt: '10',
  fontFamily: 'body',
};

export const descriptionStyled: TextProps = {
  color: 'font.pencil',
  mt: '3',
  textAlign: 'center',
  fontSize: 'md',
};
