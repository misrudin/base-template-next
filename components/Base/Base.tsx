import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { IBaseProps } from '@interfaces/IBase';
import Link from 'next/link';
import { memo } from 'react';
import { FiPlus } from 'react-icons/fi';

const Base: React.FC<IBaseProps> = ({
  title,
  subTitle,
  buttonText,
  children,
  onActionClick,
  buttonLink,
}): JSX.Element => {
  return (
    <Box p="6">
      <Flex align="center" justify="space-between" gap="2">
        <Box>
          <Heading fontFamily="body" size="md">
            {title}
          </Heading>
          <Text fontSize="sm" color="font.pencil">
            {subTitle}
          </Text>
        </Box>
        {!!buttonText && (
          <Button
            size="lg"
            leftIcon={<FiPlus size="16px" />}
            {...(onActionClick && { onClick: onActionClick })}
            {...(buttonLink && { as: Link, href: buttonLink })}
          >
            {buttonText}
          </Button>
        )}
      </Flex>
      <Box mt="2" id="base">
        {children}
      </Box>
    </Box>
  );
};

export default memo(Base);
