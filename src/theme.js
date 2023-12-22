// theme.js

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',

    useSystemColorMode: false,
  },

  colors: {
    light: {
      background: 'white',
      text: 'black',
    },

    dark: {
      background: 'rgb(21,10,9)',
      text: 'white',
    },
  },
});

export default theme;
