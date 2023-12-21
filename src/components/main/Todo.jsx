import {
  Flex,
  VStack,
  Text,
  Image,
  Box,
  Button,
  Textarea,
} from '@chakra-ui/react';
import buttonCheck from '../../assets/main/todo/buttonCheck.svg';
import check from '../../assets/main/todo/check.svg';
import uncheck from '../../assets/main/todo/uncheck.svg';
import roundPlus from '../../assets/main/todo/roundPlus.svg';

const Todo = () => {
  return (
    <Flex direction='column' h='500px' padding={4}>
      <Text fontSize='2xl' mb={4}>
        To-Do List
      </Text>
      <VStack spacing={4} w='100%'>
        <Flex align='center' justify='space-between' w='100%'>
          <Textarea placeholder='Add a todo...' />
          <Box ml='auto'>
            <Image src={roundPlus} alt='Round Plus' boxSize='24px' />
          </Box>
        </Flex>
        <Flex justify='space-between' w='100%'>
          <Button
            leftIcon={<Image src={uncheck} alt='Button Check' boxSize='18px' />}
          >
            Select All
          </Button>
          <Button
            leftIcon={
              <Image src={buttonCheck} alt='Button Check' boxSize='18px' />
            }
            colorScheme='green'
          >
            Done
          </Button>
        </Flex>
        <Flex align='center'>
          <Image src={buttonCheck} alt='Button Check' boxSize='24px' mr={2} />
          <Text>Todo Item 1</Text>
        </Flex>
        <Flex align='center'>
          <Image src={check} alt='Check' boxSize='24px' mr={2} />
          <Text>Todo Item 2</Text>
        </Flex>
        <Flex align='center'>
          <Image src={uncheck} alt='Uncheck' boxSize='24px' mr={2} />
          <Text>Todo Item 3</Text>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Todo;
