import { CloseButtonProps } from '@chakra-ui/close-button';
import type { FlexProps, StackProps } from '@chakra-ui/layout';

interface IStyle {
  readonly isFooterGrid?: boolean;
  readonly hasClose?: boolean;
  readonly isShadow?: boolean;
}

export const footerStyled = ({
  isFooterGrid,
  isShadow,
}: IStyle): StackProps => ({
  spacing: '4',
  alignItems: 'stretch',
  flex: '1',
  mt: '1',
  direction: isFooterGrid ? 'row' : 'column',
  ...(isShadow && {
    pt: '3',
    boxShadow: '0px -6px 12px rgba(46, 67, 77, 0.1)',
    mx: '-4',
    px: '4',
    mb: '-1',
  }),
});

export const titleWrapperStyled = ({ hasClose }: IStyle): FlexProps => ({
  alignItems: 'center',
  justifyContent: hasClose ? 'space-between' : 'center',
  my: '4',
});

export const closeButtonStyled: CloseButtonProps = {
  w: '20px',
  h: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  ml: '4',
  position: 'relative',
  top: '0',
  right: '0',
};
