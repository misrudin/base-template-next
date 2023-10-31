import { configEnv } from '@libraries/config';

const seoConfig = {
  title: 'Admin 807Garage',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: configEnv.baseUrl,
    siteName: 'garage',
  },
  twitter: {
    handle: '@garage',
    site: '@garage',
    cardType: 'summary_large_image',
  },
};

export default seoConfig;
