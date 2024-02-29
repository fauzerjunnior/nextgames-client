'use client';

import GlobalStyles from '@/styles/global';
import theme from '@/styles/theme';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { ThemeProvider } from 'styled-components';

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next Games</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <meta name="description" content="the best game stores in the world!" />
      </Head>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
