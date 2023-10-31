import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import {
  bodyStyled,
  descriptionStyled,
  errorStyled,
  headingStyled,
} from '@components/Error/Error.styles';
import { IError } from '@components/Error/Error.types';

const Error: React.FC<IError> = ({
  title,
  description,
  imageUrl,
  children,
  ...props
}): JSX.Element => {
  return (
    <Flex {...errorStyled} {...props}>
      <Image
        src={imageUrl || `/img/404.svg`}
        alt={title || 'Halaman Tidak Ditemukan'}
      />
      <Flex {...bodyStyled}>
        <Heading {...headingStyled}>
          {title || 'Halaman Tidak Ditemukan'}
        </Heading>
        {description && (
          <Text {...descriptionStyled}>
            {description ||
              'Halaman yang Anda tuju tidak tersedia. Jangan khawatir, Anda bisa kembali ke halaman Beranda'}
          </Text>
        )}
        {children}
      </Flex>
    </Flex>
  );
};

export default React.memo(Error);
