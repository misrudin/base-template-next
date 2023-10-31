import { Box } from '@chakra-ui/layout';
import { FC, ReactElement, memo } from 'react';

const SideMenuDivider: FC = (): ReactElement => (
  <Box
    borderBottom="1px solid"
    borderBottomColor="gray.100"
    mt="4"
    mb="6"
    mr="4"
    ml="4"
  />
);

export default memo(SideMenuDivider);
