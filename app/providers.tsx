'use client';

import {
  ChakraProvider,
  ThemeConfig,
  baseTheme,
  extendTheme,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { albert, barlow } from './fonts';

const myTheme: ThemeConfig = extendTheme(baseTheme, {
  fonts: {
    body: `${albert.style.fontFamily}, ${baseTheme.fonts.body}`,
    heading: `${barlow.style.fontFamily}, ${baseTheme.fonts.heading}`,
  },
});

export const Providers = ({ children }: PropsWithChildren) => {
  return <ChakraProvider theme={myTheme}>{children}</ChakraProvider>;
};
