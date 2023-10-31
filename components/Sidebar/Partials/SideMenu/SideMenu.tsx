import { Box } from '@chakra-ui/layout';
import { FC, ReactElement, ReactNode, memo } from 'react';

const SideMenu: FC<{ expanded?: boolean; children?: ReactNode }> = ({
  children,
  expanded = true,
}): ReactElement => (
  <Box
    as="aside"
    overflow="auto"
    flex={expanded ? '0 0 280px' : '0 0 80px'}
    maxWidth={expanded ? '280px' : '80px'}
    minWidth={expanded ? '280px' : '80px'}
    width={expanded ? '280px' : '80px'}
    py="4"
    h="calc(100vh - 60px)"
    display="flex"
    zIndex="9"
    flexDir="column"
    overflowY="auto"
    overflowX="hidden"
    transition="all .2s"
    id="side-menu"
    sx={{
      'h4, .expanded-menu': {
        display: expanded ? 'flex' : 'none',
      },
      '.shrinked-menu': {
        display: expanded ? 'none' : 'flex',
        borderRadius: '0',
        ...(!expanded && {
          padding: '0 !important',
          justifyContent: 'center',
          '& > div': {
            right: '-1',
            position: 'relative',
          },
        }),
      },
      ...(!expanded && {
        '.sidemenu-sub .shrinked-menu.active': {
          color: 'white',
          bg: 'bg.primary',
        },
        '.sidemenu-sub .chakra-stack': {
          display: 'none',
        },
      }),
    }}
  >
    {children}
  </Box>
);

export default memo(SideMenu);
