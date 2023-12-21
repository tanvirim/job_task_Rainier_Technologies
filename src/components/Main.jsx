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
          'greeting greeting'
          'vitals vitals'
          'upcoming upcoming'
          'todo todo'
          'covid covid'
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
    >
      <GridItem area='greeting'>
        <Greeting />
      </GridItem>
      <GridItem area='vitals'>
        <Vitals />
      </GridItem>
      <GridItem area='upcoming'>
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
