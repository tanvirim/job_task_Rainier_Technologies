/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { HStack, Image, Text } from '@chakra-ui/react';
import Menu from '../assets/nav/menu.svg';
const NavBar = ({ showLeftBar, toggleLeftBar }) => {
  return (
    <HStack>
      <Image onClick={toggleLeftBar} cursor='pointer' src={Menu} />
      <Text>Home</Text>
    </HStack>
  );
};

export default NavBar;
