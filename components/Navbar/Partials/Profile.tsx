import {
  Avatar,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Heading,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  VStack,
} from '@chakra-ui/react';
import { titelize } from '@helpers/string';
import useResponsive from '@hooks/useResponsive';
import { useAuth } from '@providers/useAuth';
import Link from 'next/link';
import { memo } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { FiChevronDown, FiChevronRight, FiLogOut } from 'react-icons/fi';

const Profile: React.FC = (): JSX.Element => {
  const { profile } = useAuth();
  const { isMobile } = useResponsive();
  return (
    <Popover isLazy placement="bottom-end">
      <PopoverTrigger>
        <Flex
          align="center"
          gap="2"
          {...(isMobile && {
            px: '4',
          })}
          cursor="pointer"
        >
          <Avatar
            size="sm"
            bg="bg.primary"
            name={profile?.name || 'John Doe'}
            color="white"
          />
          <Box>
            <Text
              fontSize="sm"
              fontWeight="medium"
              noOfLines={1}
              whiteSpace="nowrap"
              textTransform="capitalize"
            >
              {profile?.name || 'John Doe'}
            </Text>
            <Text
              mt="-1"
              color="font.placeholder"
              textTransform="capitalize"
              fontSize="2xs"
            >
              {titelize(profile?.level)?.toLowerCase()}
            </Text>
          </Box>
          <FiChevronDown size="16px" />
        </Flex>
      </PopoverTrigger>
      <PopoverContent
        shadow="0 0 20px 7px rgba(0,0,0,0.05) !important"
        border="hidden"
        mt="10px"
        rounded="md"
      >
        <PopoverArrow
          border="hidden !important"
          shadow="none !important"
          w="20px !important"
          h="20px !important"
          top="-2px !important"
        />
        <PopoverBody pt="6" px="0">
          <Box px="4">
            <Center>
              <Avatar
                size="lg"
                bg="bg.primary"
                name={profile?.name || 'John Doe'}
                color="white"
              />
            </Center>
            <Heading
              textTransform="capitalize"
              mt="4"
              size="md"
              textAlign="center"
            >
              {profile?.name || 'John Doe'}
            </Heading>
            <Text
              color="font.placeholder"
              textTransform="capitalize"
              fontSize="xs"
              textAlign="center"
            >
              {titelize(profile?.level)?.toLowerCase()}
            </Text>
          </Box>
          <Divider color="border" mt="6" />
          <VStack align="stretch" spacing="0">
            <Link href="/profile" passHref>
              <Button
                textAlign="left"
                alignItems="center"
                variant="unstyled"
                w="full"
                display="flex"
                leftIcon={<FaUserAlt size="16px" />}
                rightIcon={<FiChevronRight size="16px" />}
                gap="2"
                px="4"
                rounded="0"
                size="xl"
                _hover={{
                  bg: 'gray.50',
                }}
              >
                <Text flex="1">Profile</Text>
              </Button>
            </Link>

            <Link href="/logout" passHref>
              <Button
                textAlign="left"
                alignItems="center"
                variant="unstyled"
                w="full"
                display="flex"
                leftIcon={<FiLogOut size="16px" />}
                gap="2"
                px="4"
                color="red.500"
                rounded="0"
                size="xl"
                _hover={{
                  bg: 'gray.50',
                }}
              >
                <Text flex="1">Logout</Text>
              </Button>
            </Link>
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default memo(Profile);
