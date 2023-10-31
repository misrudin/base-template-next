import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import { ISpin } from '@components/Loading/Loading.types';

const Spin: React.FC<ISpin> = ({ isLoading, children }): JSX.Element => {
  return (
    <Box position="relative">
      {isLoading && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%)"
          zIndex="9"
        >
          <Flex
            bg="bg.disabled"
            px="4"
            py="1"
            borderRadius="25px"
            align="center"
            justify="center"
          >
            <Image
              src={`/img/loading-animation.gif`}
              width="20px"
              alt="loading.."
            />
            <Text ml="2" color="font.pencil">
              Memuat
            </Text>
          </Flex>
        </Box>
      )}
      <Box
        {...(isLoading && {
          opacity: '0.5',
          userSelect: 'none',
          pointerEvents: 'none',
          overflow: 'hidden',
        })}
      >
        {children}
      </Box>
    </Box>
  );
};

Spin.displayName = 'Spin';
export default Spin;
