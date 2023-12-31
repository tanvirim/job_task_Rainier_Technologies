import {
  Flex,
  VStack,
  Text,
  Image,
  Box,
  Button,
  Textarea,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import buttonCheck from '../../assets/main/todo/buttonCheck.svg';
import check from '../../assets/main/todo/check.svg';
import uncheck from '../../assets/main/todo/uncheck.svg';
import roundPlus from '../../assets/main/todo/roundPlus.svg';

const Todo = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue('white', 'white');
  const todoItems = [
    {
      icon: check,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente rerum',
    },
    {
      icon: uncheck,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente rerum',
    },
    {
      icon: check,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia sapiente rerum',
    },
  ];

  return (
    <Flex
      direction='column'
      padding={8}
      rounded={8}
      style={{
        backgroundColor:
          colorMode === 'light' ? 'rgb(255, 255, 255)' : 'rgba(44, 34, 34,.7)',
      }}
    >
      <Text fontSize='2xl ' className='font-semibold'>
        To-Do List
      </Text>
      <VStack spacing={4} w='100%'>
        <Flex align='center' justify='space-between' w='100%'>
          <Textarea height={100} placeholder='Add a todo...' />
          <Box>
            <Image
              marginTop={140}
              src={roundPlus}
              alt='Round Plus'
              boxSize='50px'
            />
          </Box>
        </Flex>
        <Flex justify='space-between' w='100%'>
          <Flex direction='row' align='center' gap={2}>
            <Image src={uncheck} alt='Button Check' boxSize='40px' />
            <Button>Select All</Button>
          </Flex>
          <Button
            color={textColor}
            leftIcon={
              <Image src={buttonCheck} alt='Button Check' boxSize='18px' />
            }
            bg='#FF7594'
          >
            Done
          </Button>
        </Flex>
        <Flex
          flexDirection='column'
          justifyContent='start'
          gap={30}
          width='100%'
        >
          <Flex direction='column' gap={6} justifyContent='start'>
            {todoItems.map((item, index) => (
              <Flex key={index} flexDirection='column'>
                <Flex>
                  <Image src={item.icon} alt='Icon' boxSize='24px' mr={2} />
                  <Text>{item.text}</Text>
                </Flex>
                <Box className='opacity-30 mr-40'>Last Seen; 10:20 PM</Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Todo;
