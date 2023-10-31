import {
  BoxProps,
  GridProps,
  HeadingProps,
  StackProps,
  TextProps,
} from '@chakra-ui/react';

export const headingStyled: HeadingProps = {
  as: 'h5',
  fontSize: 'lg',
  fontWeight: 'semibold',
};

export const spacingStyled: StackProps = {
  alignItems: 'stretch',
  mt: '4',
  spacing: '2',
  fontSize: 'sm',
};

export const footerLinkStyled: GridProps = {
  gap: '4',
  gridTemplateColumns: 'repeat(4,1fr)',
};

export const newsletterLabelStyled = {
  fontSize: 'sm',
  color: 'font.pencil',
  mt: '1',
  mb: '2',
};

export const newsletterInputGroupStyled = {
  size: 'lg',
  maxW: '240px',
};

export const footerStyled: BoxProps = {
  as: 'footer',
  py: '10',
  bg: 'bg.footer',
};

export const gridStyled = {
  gap: '28px',
  gridTemplateColumns: ['1fr', '1fr', '2fr repeat(3, 1fr)'],
};

export const logoStyled = {
  height: '28px',
  width: '115px',
};

export const copyStyled: TextProps = {
  fontSize: 'xs',
  textAlign: 'center',
  color: 'white',
};
