/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  HStack,
  Image,
  Box,
  Text,
  useColorModeValue,
  VStack,
  Center,
} from '@chakra-ui/react';
import Menu from '../assets/nav/menu.svg';
import Avatar from '../assets/nav/Avatar.svg';
import ColorMOdeSwitch from './ColorModeSwitch';
import NavImage from '../assets/nav/navImage.svg';
const NavBar = ({ toggleLeftBar }) => {
  const textColor = useColorModeValue('white');
  return (
    <Box
      height={420}
      paddingX={4}
      paddingY={4}
      bg='linear-gradient(270deg, #FF7C65 0%, #FF7594 100%)'
    >
      <HStack justifyContent='space-between'>
        <HStack>
          <Image
            padding={1}
            rounded='md'
            bg='white'
            onClick={toggleLeftBar}
            cursor='pointer'
            src={Menu}
          />
          <Text color={textColor} fontWeight={600}>
            {' '}
            Home
          </Text>
        </HStack>
        <HStack>
          <ColorMOdeSwitch />
          <Image src={Avatar} width={8} />{' '}
        </HStack>
      </HStack>

      <Center>
        <Box>
          <Image src={NavImage} paddingLeft={10} />
          <Box>
            <Text color={textColor} fontSize={20} fontWeight={600}>
              Hello, Mary Jane!
            </Text>
            <Text color={textColor}>
              Stay Up-to-Date with your appointments.
            </Text>
            <Text color={textColor}>You Have No pending Reports</Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default NavBar;
