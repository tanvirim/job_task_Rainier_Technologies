import { useColorMode, Box, Image } from '@chakra-ui/react';
import DarkTheme from '../assets/nav/Toggle button_dark.png';
import LightTheme from '../assets/nav/Toggle button_light.svg';
const ColorMOdeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box onClick={toggleColorMode}>
      {colorMode === 'light' ? (
        <Image width={16} src={DarkTheme} />
      ) : (
        <Image width={16} src={LightTheme} />
      )}
    </Box>
  );
};

export default ColorMOdeSwitch;
