/* eslint-disable no-unused-vars */
import {
  Flex,
  Image,
  Box,
  Text,
  useColorModeValue,
  VStack,
  Center,
} from '@chakra-ui/react';
import NavImage from '../../assets/nav/navImage.svg';
const Greeting = () => {
  const textColor = useColorModeValue('white');
  return (
    <Box
      padding={8}
      bg='linear-gradient(270deg, #FF7C65 0%, #FF7594 100%)'
      rounded={{ base: 0, md: '20px' }}
    >
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        gap={{ base: '5px', md: '30px' }}
        justifyContent={{ base: 'center', md: 'left' }}
        align='center'
      >
        <Image src={NavImage} paddingLeft={10} />
        <Box>
          <Text color={textColor} fontSize={20} fontWeight={600}>
            Hello, Mary Jane!
          </Text>
          <Text color={textColor}>Stay Up-to-Date with your appointments.</Text>
          <Text color={textColor}>You Have No pending Reports</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Greeting;
