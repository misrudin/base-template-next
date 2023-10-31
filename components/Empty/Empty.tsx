import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';

import {
  bodyStyled,
  descriptionStyled,
  emptyStyled,
  headingStyled,
} from '@components/Empty/Empty.styles';
import { IEmpty } from '@components/Empty/Empty.types';

const Empty: React.FC<IEmpty> = ({
  title,
  description,
  imageUrl,
  isDashboard,
  isFullWidth,
  children,
  ...props
}): JSX.Element => {
  return (
    <Flex {...emptyStyled({ isDashboard, isFullWidth })} {...props}>
      <Image
        src={imageUrl}
        alt={imageUrl}
        {...(isFullWidth && { boxSize: 160 })}
      />
      <Flex {...bodyStyled({ isDashboard, isTitle: Boolean(title) })}>
        {title && <Heading {...headingStyled}>{title}</Heading>}
        {description && <Text {...descriptionStyled}>{description}</Text>}
        {children}
      </Flex>
    </Flex>
  );
};

export default React.memo(Empty);
