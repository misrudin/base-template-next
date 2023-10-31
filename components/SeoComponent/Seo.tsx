import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';

import { configEnv } from '@libraries/config';

import { ISeo } from './Seo.types';

const SEO: React.FC<ISeo> = ({
  title = '',
  description,
  imageUrl = '',
  type = 'website',
  keywords,
}): JSX.Element => {
  const { asPath } = useRouter();
  const seoTitle =
    (title !== '' ? title : 'ADMIN 807GARAGE') +
    ' - ADMIN 807GARAGE SNEAKER STORE';
  const seoDescription =
    description !== ''
      ? description
      : '807GARAGE. ONE OF THE FINEST SNEAKER STORE IN INDONESIA';

  const currentUrl = configEnv.baseUrl + asPath;

  return (
    <NextSeo
      title={seoTitle}
      defaultTitle={seoTitle}
      titleTemplate={seoTitle}
      description={seoDescription}
      canonical={currentUrl}
      openGraph={{
        type,
        url: currentUrl,
        title: seoTitle,
        description: seoDescription,
        defaultImageWidth: 1200,
        defaultImageHeight: 630,
        images: [{ url: imageUrl, alt: seoTitle, width: 1200, height: 630 }],
        siteName: 'garage',
      }}
      twitter={{
        handle: '@garage',
        site: '@garage',
        cardType: 'summary_large_image',
      }}
      additionalMetaTags={[
        {
          name: 'keywords',
          content: keywords,
        },
      ]}
    />
  );
};

export default React.memo(SEO);
