import { Grid, GridItem, Box } from '@chakra-ui/react';
import Main from './components/main/Main';
import { useState } from 'react';
import NavBar from './components/NavBar';
import LeftSideBar from './components/LeftSideBar';

function App() {
  const [showLeftBar, setShowLeftBar] = useState(false);

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
          bg='red'
          zIndex={10}
          position='absolute'
          height='100vh'
          width='150px'
          left={showLeftBar ? '0' : '-200px'}
          top='0'
          transition='left 0.3s ease-out'
        >
          <LeftSideBar toggleLeftBar={toggleLeftBar} />
        </GridItem>
        <GridItem
          area='main'
          bg='blue'
          position='absolute'
          top='420px'
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
