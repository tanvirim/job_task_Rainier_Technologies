import { Grid, GridItem } from '@chakra-ui/react';
import Greeting from './main/Greeting';
import Vitals from './main/Vitals';
import Upcoming from './main/Upcoming';
import Todo from './main/Todo';
import Covid from './main/Covid';

const Main = () => {
  return (
    <Grid
      templateAreas={{
        base: `
          'greeting'
          'vitals'
          'upcoming'
          'todo'
          'covid'
        `,
        md: `
          'greeting greeting'
          'vitals vitals'
          'todo upcoming'
          'covid covid'
        `,
        lg: `
          'greeting upcoming'
          'vitals upcoming'
          'todo covid'
        `,
      }}
      columnGap={{ base: 4, lg: 40 }}
      rowGap={{ base: 4, lg: 8 }}
      marginX={{ md: 10 }}
    >
      <GridItem area='greeting'>
        <Greeting />
      </GridItem>
      <GridItem area='vitals'>
        <Vitals />
      </GridItem>
      <GridItem area='upcoming' maxWidth='452px'>
        <Upcoming gridArea='upcoming' />
      </GridItem>
      <GridItem area='todo'>
        <Todo gridArea='todo' />
      </GridItem>
      <GridItem area='covid'>
        <Covid gridArea='covid' />
      </GridItem>
    </Grid>
  );
};

export default Main;
