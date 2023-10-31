import { BoxProps } from '@chakra-ui/react';

interface IStyle {
  readonly isExpand?: boolean;
}

export const accordionStyled = ({ isExpand }: IStyle): BoxProps => ({
  borderBottom: '1px',
  borderRadius: '0',
  borderColor: isExpand ? 'bg.primary' : 'blackAlpha.200',
  overflow: 'hidden',
});
