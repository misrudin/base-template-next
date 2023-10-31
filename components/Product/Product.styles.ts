import { BoxProps } from '@chakra-ui/react';

export const productStyle = ({
  isSimple,
  isOneRow,
  isFullWidth,
}: {
  isSimple: boolean;
  isOneRow: boolean;
  isFullWidth: boolean;
}): BoxProps => ({
  pb: '2',
  bg: 'white',
  ...(!isSimple && {
    border: '0px',
  }),
  ...(!isFullWidth && {
    w: {
      base: '150px',
      md: '200px',
    },
  }),
  pos: 'relative',
  ...(isSimple && {
    display: 'flex',
    gap: '4',
    alignItems: 'center',
    borderBottom: 0,
    pb: '0',
    w: 'full',
  }),
  ...(isOneRow && {
    flexDir: 'column',
    px: '0',
    py: '0',
  }),
  borderColor: 'border',
  h: 'full',
});
