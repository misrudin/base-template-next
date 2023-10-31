import { Image, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';

import TextLink from '@components/TextLink';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const SocialMedia: React.FC = (): JSX.Element => {
  return (
    <Wrap mt="6" spacing="6">
      <WrapItem
        as={TextLink}
        link="https://www.instagram.com/807Garage.id/"
        target="_blank"
        rel="noopener"
        color="white"
      >
        <FaInstagram size={24} />
      </WrapItem>
      <WrapItem
        as={TextLink}
        link="https://www.instagram.com/807Garage.idn/"
        target="_blank"
        rel="noopener"
        color="white"
      >
        <FaInstagram size={24} />
      </WrapItem>
      <WrapItem
        as={TextLink}
        link="https://www.tiktok.com/@807garage"
        target="_blank"
        rel="noopener"
        color="white"
      >
        <FaTiktok size={24} />
      </WrapItem>

      <WrapItem
        as={TextLink}
        link="https://shp.ee/qmqyh95"
        target="_blank"
        rel="noopener"
        color="white"
      >
        <Image
          src="/icons/shopee.png"
          minW="24px"
          w="24px"
          h="24px"
          objectFit="contain"
        />
      </WrapItem>

      <WrapItem
        as={TextLink}
        link="https://tokopedia.link/m2AjKMgM7Bb"
        target="_blank"
        rel="noopener"
        color="white"
      >
        <Image
          src="/icons/tokped.png"
          minW="24px"
          w="24px"
          h="24px"
          objectFit="contain"
        />
      </WrapItem>

      <WrapItem
        as={TextLink}
        link="https://www.youtube.com/@807garage"
        target="_blank"
        rel="noopener"
        color="white"
      >
        <FaYoutube size={24} />
      </WrapItem>
    </Wrap>
  );
};

export default React.memo(SocialMedia);
