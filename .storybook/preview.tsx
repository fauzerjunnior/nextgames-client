import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/global';
import theme from '../src/styles/theme';

export const parameters = {
  backgrounds: {
    default: 'next-light',
    values: [
      {
        name: 'next-light',
        value: theme.colors.white,
      },
      {
        name: 'next-dark',
        value: theme.colors.mainBg,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />
      <Story />
    </ThemeProvider>
  ),
];
