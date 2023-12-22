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

const NavBar = ({ toggleLeftBar }) => {
  const textColor = useColorModeValue('white');
  const changeColor = useColorModeValue('black', 'white');
  return (
    <Box
      height={20}
      paddingX={4}
      paddingY={4}
      bg={{
        base: 'linear-gradient(270deg, #FF7C65 0%, #FF7594 100%)',
        md: 'none',
      }}
    >
      <HStack justifyContent='space-between'>
        <HStack>
          <Image
            padding={1}
            rounded='md'
            bg={{ base: 'white', md: 'none' }}
            onClick={toggleLeftBar}
            cursor='pointer'
            src={Menu}
          />
          <Text
            marginLeft={{ md: '85px' }}
            marginTop={{ md: '20px' }}
            fontSize={{ base: 'md', md: '2xl' }}
            color={{ base: textColor, md: changeColor }}
            fontWeight={600}
          >
            {' '}
            Home
          </Text>
        </HStack>
        <HStack>
          <ColorMOdeSwitch />
          <Image src={Avatar} width={8} />{' '}
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
