import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

import { ITextLink } from '@components/TextLink/TextLink.type';

const TextLink: React.FC<ITextLink> = ({
  title,
  link,
  children,
  isAnchor,
  ...props
}): JSX.Element => {
  if (isAnchor) {
    return (
      <Link href={link} {...props}>
        {title}
        {children}
      </Link>
    );
  }
  return (
    <Link href={link} as={NextLink} {...props}>
      {title}
      {children}
    </Link>
  );
};

export default React.memo(TextLink);
