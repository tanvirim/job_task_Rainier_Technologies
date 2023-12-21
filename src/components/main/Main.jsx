import { Box } from '@chakra-ui/react';
import Vitals from './Vitals';
import Upcoming from './Upcoming';
import Todo from './Todo';
import Covid from './Covid';
const Main = () => {
  return (
    <Box height={10000}>
      <Vitals />
      <Upcoming />
      <Todo />
      <Covid />
    </Box>
  );
};

export default Main;
