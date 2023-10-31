import { Box, Heading } from '@chakra-ui/layout';
import { FC, ReactElement, memo } from 'react';
import { ISideMenuParent } from './SideMenu/SideMenu.types';

const SideMenuParent: FC<ISideMenuParent> = ({
  title,
  children,
}): ReactElement => (
  <Box>
    <Heading
      as="h4"
      px="4"
      mb="4"
      fontWeight="medium"
      color="font.ink"
      fontSize="xs"
      fontFamily="body"
    >
      {title}
    </Heading>
    {children}
  </Box>
);

export default memo(SideMenuParent);
