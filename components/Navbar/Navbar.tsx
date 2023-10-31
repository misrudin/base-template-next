import { Box, Flex } from '@chakra-ui/react';
import { memo } from 'react';
import { navbarStyles } from './Navbar.styles';
import { INavbar } from './Navbar.types';
import { Profile, Search } from './Partials';

const Navbar: React.FC<INavbar> = ({}): JSX.Element => {
  return (
    <Box {...navbarStyles}>
      <Flex h="full" align="center" justify="space-between">
        <Search />
        <Flex align="center" gap="4">
          <Profile />
        </Flex>
      </Flex>
    </Box>
  );
};

export default memo(Navbar);
