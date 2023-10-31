import { FlexProps, TextProps } from '@chakra-ui/react';

interface IStyle {
  readonly heightWrapper?: string;
  readonly widthWrapper?: string;
  readonly imageUrl?: string;
  readonly isLoading?: boolean;
}

export const uploadStyled = ({
  heightWrapper,
  widthWrapper,
  imageUrl,
  isLoading,
}: IStyle): FlexProps => ({
  justify: 'center',
  align: 'center',
  py: '4',
  px: '4',
  flexDirection: 'column',
  minW: widthWrapper || '120px',
  maxW: '100%',
  minH: heightWrapper || '156px',
  border: imageUrl ? '0' : '1px dashed',
  borderColor: 'border',
  rounded: 'md',
  backgroundImage: imageUrl,
  backgroundColor: isLoading ? 'bg.footer' : 'white',
  cursor: isLoading ? 'not-allowed' : 'pointer',
  backgroundPosition: 'center center',
  backgroundSize: 'cover',
  _hover: { borderColor: isLoading ? 'border' : 'red.500' },
});

export const iconStyled: FlexProps = {
  w: '38px',
  h: '38px',
  borderRadius: '50%',
  background: ' rgba(0, 0, 0, 0.54)',
  boxShadow: ' 0px 12px 20px rgba(0, 0, 0, 0.08)',
  align: 'center',
  justify: 'center',
};

export const titleStyled: TextProps = {
  fontSize: 'xs',
  color: 'red.500',
  mt: '2',
  textAlign: 'center',
};

export const descriptionStyled: TextProps = {
  fontSize: 'xs',
  color: 'font.pencil',
  textAlign: 'center',
};
