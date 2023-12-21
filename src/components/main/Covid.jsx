import { Flex, Image, Box, Text, useColorMode } from '@chakra-ui/react';
import covidImage from '../../assets/covid.svg'; // Import your COVID-19 image

const Covid = () => {
  const { colorMode } = useColorMode();
  return (
    <Flex
      style={{
        backgroundColor:
          colorMode === 'light' ? 'rgb(255, 255, 255)' : 'rgba(44, 34, 34,.7)',
      }}
      direction={{ base: 'column', md: 'row', lg: 'row' }}
      alignItems={{ base: 'center', md: 'center', lg: 'center' }}
      justifyContent={{ base: 'center', md: 'center', lg: 'center' }}
      maxW='1000px'
    >
      <Image
        src={covidImage}
        alt='COVID-19'
        maxW={{ base: '80%', md: '50%' }}
      />
      <Box ml={{ base: 0, md: 4, lg: 4 }} mt={{ base: 4, md: 0, lg: 0 }}>
        <Text fontSize='lg' mb={2}>
          Infection Number: <span>500</span>
        </Text>
        <Text fontSize='lg' mb={2}>
          Infection Rate: <span>10%</span>
        </Text>
        <Text fontSize='lg' mb={2}>
          Total Infection: <span>50,0000</span>
        </Text>
        <Text fontSize='lg'>
          Number of Deaths: <span>200</span>
        </Text>
      </Box>
    </Flex>
  );
};

export default Covid;
