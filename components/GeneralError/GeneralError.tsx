import { Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { memo } from 'react';

import { IMAGE_LAZY } from '@utils/constant';

import { IGeneralError } from './GeneralError.types';

const GeneralError = ({
  title,
  descripton,
  imageUrl,
  children,
}: IGeneralError): JSX.Element => {
  return (
    <Flex
      minH="100vh"
      px="4"
      py="8"
      flexDirection="column"
      align="center"
      justify="center"
      maxW="500px"
      mx="auto"
    >
      <Image
        src={imageUrl ? imageUrl : `/img/error.svg`}
        title="Sorry, something went wrong :("
        fallbackSrc={IMAGE_LAZY}
        alt="Sorry, something went wrong :("
      />
      <Heading as="h1" size="lg" textAlign="center" mt="10">
        {title ? title : 'Sorry, something went wrong :('}
      </Heading>
      <Text fontSize="md" color="font.pencil" mt="4" textAlign="center">
        {descripton
          ? descripton
          : 'We provide a professional service for private and commercial customers.'}
      </Text>
      {children ? (
        children
      ) : (
        <Link href="/">
          <Button mt="10" size="lg" px="6" rounded="full">
            Go Back Home
          </Button>
        </Link>
      )}
    </Flex>
  );
};

export default memo(GeneralError);
