import { Grid, GridItem, Box, useColorMode } from '@chakra-ui/react';

import { useState } from 'react';
import NavBar from './components/NavBar';
import LeftSideBar from './components/LeftSideBar';
import Main from './components/Main';

function App() {
  const [showLeftBar, setShowLeftBar] = useState(false);
  const { colorMode } = useColorMode();

  const toggleLeftBar = () => {
    setShowLeftBar((prev) => !prev);
  };

  return (
    <Box position='relative' height='150vh'>
      <Grid
        templateAreas={`"nav nav"
                     "left main"`}
      >
        <GridItem area='nav' zIndex={{ base: 1, md: 30 }}>
          <NavBar toggleLeftBar={toggleLeftBar} />
        </GridItem>

        <GridItem
          area='left'
          zIndex={10}
          position='absolute'
          height='100vh'
          width={{ base: '264px', md: '75px' }}
          left={{ base: showLeftBar ? '0' : '-400px', md: 0 }}
          top='0'
          transition='left 0.3s ease-out'
        >
          <LeftSideBar toggleLeftBar={toggleLeftBar} colorMode={colorMode} />
        </GridItem>

        <GridItem
          area='main'
          position='absolute'
          top='80px'
          height='auto'
          width='100%'
          left={{ md: '40px', lg: '100px' }}
        >
          <Main />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
