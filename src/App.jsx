import { Grid, GridItem, Box } from '@chakra-ui/react';
import { useColorMode } from '@chakra-ui/react';
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
    <Box position='relative'>
      <Grid
        templateAreas={`"nav nav"
                     "left main"`}
      >
        <GridItem area='nav'>
          <NavBar toggleLeftBar={toggleLeftBar} />
        </GridItem>

        <GridItem
          area='left'
          zIndex={10}
          position='absolute'
          height='100vh'
          width='264px'
          left={showLeftBar ? '0' : '-400px'}
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
        >
          <Main />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default App;
