import { NextPage } from 'next';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MyCustomTheme } from 'themes';
import { RecoilEnv, RecoilRoot } from 'recoil';
import Router from 'next/router';
import nProgress from 'nprogress';

import { getBasicTokenString } from '@helpers/credentials';
import { AuthProvider } from 'providers/useAuth';

import seoConfig from '../next-seo.config';
import { createStandaloneToast } from '@chakra-ui/toast';
import { ChakraProvider } from '@chakra-ui/provider';
import { DM_Sans, Archivo } from 'next/font/google';

const { ToastContainer } = createStandaloneToast();

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchIntervalInBackground: false,
      suspense: false,
    },
    mutations: {
      retry: false,
    },
  },
});
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const fontHeading = Archivo({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});
const fontBody = DM_Sans({ weight: ['400', '500', '700'], subsets: ['latin'] });

interface CustomAppProps extends AppProps {
  Component: NextPage;
}

const App: NextPage<CustomAppProps> = ({ Component, pageProps }) => {
  const token = getBasicTokenString();
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-heading: ${fontHeading.style.fontFamily};
            --font-body: ${fontBody.style.fontFamily};
          }
        `}
      </style>
      <DefaultSeo {...seoConfig} />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />

        <link rel="apple-touch-icon" href={`/favicon.ico`} />
        <link rel="shortcut icon" href={`/favicon.ico`} type="image/x-icon" />
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-light.ico"
          type="image/x-icon"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`/apple-touch-icon`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/apple-touch-icon`}
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href={`/apple-touch-icon`}
        />
      </Head>
      <RecoilRoot>
        <ChakraProvider theme={MyCustomTheme}>
          <QueryClientProvider client={queryClient}>
            <AuthProvider token={token}>
              <Component {...pageProps} />
              <ToastContainer />
            </AuthProvider>
          </QueryClientProvider>
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
};

export default App;
