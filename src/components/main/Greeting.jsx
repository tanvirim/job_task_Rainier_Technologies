/* eslint-disable no-unused-vars */
import {
  HStack,
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
    <Box padding={4} bg='linear-gradient(270deg, #FF7C65 0%, #FF7594 100%)'>
      <Box>
        <Image src={NavImage} paddingLeft={10} />
        <Box>
          <Text color={textColor} fontSize={20} fontWeight={600}>
            Hello, Mary Jane!
          </Text>
          <Text color={textColor}>Stay Up-to-Date with your appointments.</Text>
          <Text color={textColor}>You Have No pending Reports</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Greeting;
