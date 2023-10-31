import { FlexProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const errorStyled: FlexProps = {
  align: 'center',
  justify: 'center',
  flexDir: 'column',
  px: '4',
  py: '8',
  maxWidth: '500px',
  mx: 'auto',
};

export const bodyStyled: FlexProps = {
  mt: '8',
  flexDir: 'column',
  align: 'center',
  width: '100%',
};

export const headingStyled: HeadingProps = {
  as: 'h1',
  size: 'lg',
  textAlign: 'center',
  mt: '10',
};

export const descriptionStyled: TextProps = {
  color: 'font.pencil',
  mt: '3',
  textAlign: 'center',
  fontSize: 'md',
};
