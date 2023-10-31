import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

import TextLink from '@components/TextLink/TextLink';
import SocialMedia from './Partials/SocialMedia';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { generateWaLink } from '@helpers/whatsapp';

const Footer: React.FC = (): JSX.Element => {
  return (
    <Box mt="auto">
      <Box color="white" backgroundColor="bg.primary" py="6">
        <Container maxW="container.xl">
          <Grid
            templateColumns={{
              base: '1fr',
              md: '1.2fr 1fr 1fr 1fr',
            }}
            gap="10"
          >
            <GridItem>
              <Image
                src="/logo-white.png"
                alt="Logo"
                w="full"
                maxW="300px"
                objectFit="contain"
              />
              <VStack align="stretch" mt="4" spacing="4">
                <VStack align="stretch" spacing="4">
                  <Text fontWeight="semibold">Official Store</Text>
                  <HStack
                    as={TextLink}
                    link="https://www.google.com/maps/place/807GARAGE/@-6.8886425,107.593286,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e7fa5768c8ff:0xc5ebd2c09882a710!8m2!3d-6.8886425!4d107.5954747"
                    color="white"
                    spacing="4"
                  >
                    <Image
                      src="/icons/store-white.png"
                      minW="25px"
                      h="25px"
                      objectFit="contain"
                    />
                    <Box>
                      <Heading fontSize="sm" textTransform="uppercase">
                        Bandung
                      </Heading>
                      <Text fontSize="xs">Paris Van Java Mall, RL-D05</Text>
                    </Box>
                  </HStack>
                  <HStack
                    as={TextLink}
                    link="https://www.google.com/maps/place/807GARAGE+Jakarta/@-6.2071337,106.7969174,15z/data=!4m5!3m4!1s0x0:0x153f17994de1349b!8m2!3d-6.2127333!4d106.8037839"
                    color="white"
                    spacing="4"
                  >
                    <Image
                      src="/icons/store-white.png"
                      minW="25px"
                      h="25px"
                      objectFit="contain"
                    />
                    <Box>
                      <Heading fontSize="sm" textTransform="uppercase">
                        Jakarta
                      </Heading>
                      <Text fontSize="xs">Senayan Park Mall, UG-69</Text>
                    </Box>
                  </HStack>
                  <HStack
                    as={TextLink}
                    link="https://www.google.com/maps/place/807GARAGE/@-5.4227651,105.2638138,17z/data=!3m1!4b1!4m5!3m4!1s0x2e40db4408945b9f:0xc7cab7fd294f2f47!8m2!3d-5.4227651!4d105.2660025"
                    color="white"
                    spacing="4"
                  >
                    <Image
                      src="/icons/store-white.png"
                      minW="25px"
                      h="25px"
                      objectFit="contain"
                    />
                    <Box>
                      <Heading fontSize="sm" textTransform="uppercase">
                        Lampung
                      </Heading>
                      <Text fontSize="xs">Jl. Jendral Sudirman 108C</Text>
                    </Box>
                  </HStack>
                </VStack>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="stretch" spacing="4">
                <Text fontWeight="semibold">Information</Text>
                <TextLink link="/helps/faq" fontWeight="medium">
                  FAQ
                </TextLink>
                <TextLink link="/helps/privacy-policy" fontWeight="medium">
                  Privacy Policy
                </TextLink>
                {/* <TextLink link="/" fontWeight="medium">
                  Payment Confirmation
                </TextLink>
                <TextLink link="/" fontWeight="medium">
                  Buying & Selling Guide
                </TextLink>
                <TextLink link="/" fontWeight="medium">
                  News
                </TextLink> */}
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="stretch" spacing="4">
                <Text fontWeight="semibold">Customer Service</Text>
                <HStack
                  as={TextLink}
                  color="white"
                  spacing="4"
                  mt="2"
                  link={generateWaLink('6281260009807', 'Halo mimin 807 :)')}
                >
                  <RiCustomerService2Fill size="20px" />
                  <Text fontFamily="heading">+62 812 6000 9807</Text>
                </HStack>
                <HStack
                  as={TextLink}
                  color="white"
                  spacing="4"
                  mt="2"
                  link={generateWaLink('6281381211987', 'Halo mimin 807 :)')}
                >
                  <RiCustomerService2Fill size="20px" />
                  <Text fontFamily="heading">+62 813 8121 1987</Text>
                </HStack>
              </VStack>
            </GridItem>
            <GridItem>
              <Text fontWeight="semibold">Keep in touch with us!</Text>
              <SocialMedia />
            </GridItem>
          </Grid>
        </Container>
      </Box>
      <Box bg="#010001">
        <Container maxW="container.full" py="4">
          <HStack align="center" spacing="8" justify="center">
            <Image w="50px" objectFit="contain" src="/tagline/shipping.png" />
            <Image w="50px" objectFit="contain" src="/tagline/authentic.png" />
            <Image w="50px" objectFit="contain" src="/tagline/support.png" />
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};

export default React.memo(Footer);
