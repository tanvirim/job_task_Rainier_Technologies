import heartIcon from '../../assets/main/vitals/heart.svg';
import healthIcon from '../../assets/main/vitals/health.svg';
import bubbleIcon from '../../assets/main/vitals/bubble.svg';
import bloodIcon from '../../assets/main/vitals/blood.svg';
import arrowIcon from '../../assets/main/vitals/arrow.svg';
import whiteArrowIcon from '../../assets/main/vitals/whiteArrow.svg';

import { useColorMode, Text, Box } from '@chakra-ui/react';
const Vitals = () => {
  const { colorMode } = useColorMode();

  const medicalMeasurements = [
    {
      imageLink: heartIcon,
      method: 'Pulse Count',
      measure: '60 bpm',
      arrow: arrowIcon,
      condition: 'Normal',
    },
    {
      imageLink: healthIcon,
      method: 'Blood Pressure',
      measure: '110/70 mmHg',
      arrow: arrowIcon,
      condition: 'Slightly higher',
    },
    {
      imageLink: bubbleIcon,
      method: 'Oxygen Saturation',
      measure: '97%',
      arrow: arrowIcon,
      condition: 'Slightly Higher',
    },
    {
      imageLink: bloodIcon,
      method: 'Glucose Count',
      measure: '100mm/dl',
      arrow: arrowIcon,
      condition: 'Normal',
    },
  ];

  return (
    <Box className=' mt-4' marginBottom={{ base: 0, md: '100px' }}>
      <Text
        display={{ base: 'block', md: 'none' }}
        className='font-bold text-xl mb-4 ml-2'
      >
        Your Vitals
      </Text>
      <div className='flex flex-wrap justify-around'>
        {medicalMeasurements.map((measurement, index) => (
          <div
            key={index}
            className='p-4 w-44 rounded-md  flex flex-col mb-4   shadow-lg'
            style={{
              backgroundColor:
                colorMode === 'light'
                  ? 'rgb(255, 255, 255)'
                  : 'rgba(44, 34, 34,.7)',
            }}
          >
            <div
              className='pl-2 pt-2 rounded-md w-[50px] '
              style={{
                backgroundColor:
                  colorMode === 'light' ? 'rgba(255, 45, 45, 0.60)' : 'grey',
              }}
            >
              <img
                src={measurement.imageLink}
                alt={measurement.method}
                width='30px'
                height='30px'
                className='mb-2'
              />
            </div>

            <h3 className='text-lg font-semibold'>{measurement.method}</h3>
            <p>{measurement.measure}</p>
            <div className='flex items-center mt-2'>
              <img
                src={colorMode === 'light' ? measurement.arrow : whiteArrowIcon}
                alt='Arrow'
                className='w-4 h-4 mr-2'
              />

              <p className='text-sm text-green-600'>{measurement.condition}</p>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Vitals;
