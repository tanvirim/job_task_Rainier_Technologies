// theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  breakpoints: {
    base: '375px',
    md: '834px',
    lg: '1440px',
  },
  sizes: {
    container: {
      base: '100%',
      md: '80%',
      lg: '70%',
    },
  },
});

export default theme;
