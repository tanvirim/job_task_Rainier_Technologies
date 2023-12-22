import {
  Flex,
  Image,
  Box,
  Text,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import covidImage from '../../assets/covid.svg'; // Import your COVID-19 image

const Covid = () => {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue('#FF7594', 'white');
  const constColor = useColorModeValue('white', 'white');
  return (
    <Box
      style={{
        backgroundColor:
          colorMode === 'light' ? 'rgb(255, 255, 255)' : 'rgba(44, 34, 34,.7)',
      }}
      padding={4}
      maxWidth={{ base: '661px', md: '661px', lg: '1020px' }}
      marginTop={{ base: 0, md: '40px' }}
    >
      {/* title start */}
      <Flex
        flexDirection={{ base: 'column', md: 'row' }}
        justify={{ md: 'space-between' }}
        marginBottom={4}
      >
        <Box>
          <Text className='font-bold' color={textColor} fontSize='3xl' mb={4}>
            Covid-19 Updates
          </Text>
        </Box>
        <Box>
          <Text className='text-lg font-semibold'>10 September 2022</Text>
          <Text className='text-lg'>Thursday 10:00:00 AM</Text>
        </Box>
      </Flex>
      {/* title end */}

      {/* body start */}
      <Flex
        direction={{ base: 'column', md: 'row', lg: 'row' }}
        alignItems={{ base: 'center', md: 'center', lg: 'center' }}
        justify={{ md: 'space-between' }}
      >
        <Image src={covidImage} alt='COVID-19' />
        <Flex
          rounded='10px'
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: '4px', md: '50px' }}
          bg='linear-gradient(270deg, #FF7C65 0%, #FF7594 100%)'
          padding={4}
          color={constColor}
        >
          <Flex direction='column' gap={4}>
            <Flex direction='column' justify='center' alignItems='center'>
              <div>Infection Number:</div> <div className='text-4xl'>500</div>
            </Flex>
            <Flex direction='column' justify='center' alignItems='center'>
              <div>Infection Rate:</div> <div className='text-4xl'>10%</div>
            </Flex>
          </Flex>
          <Flex direction='column' gap={4}>
            <Flex direction='column' justify='center' alignItems='center'>
              <div>Total Infection:</div>{' '}
              <div className='text-4xl'>50,0000</div>
            </Flex>
            <Flex direction='column' justify='center' alignItems='center'>
              <div>Number of Death</div> <div className='text-4xl'>200</div>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      {/* body end */}
    </Box>
  );
};

export default Covid;
