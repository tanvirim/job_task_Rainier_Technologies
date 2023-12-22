// theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',

    useSystemColorMode: false,
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
  colors: {
    // Define colors for the light mode
    light: {
      background: 'white',
      text: 'black',
      // Define other colors as needed for the light mode
    },
    // Define colors for the dark mode
    dark: {
      background: 'rgb(21,10,9)',
      text: 'white',
      // Define other colors as needed for the dark mode
    },
  },
});

export default theme;
