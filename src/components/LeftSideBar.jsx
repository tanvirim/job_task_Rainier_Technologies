/* eslint-disable react/prop-types */
import sideArrow from '../assets/leftSideBar/sideArrow.svg';

import { Text, useColorModeValue, Box } from '@chakra-ui/react';
import logo from '../assets/leftSideBar/logo.svg';
import SidebarSVG from './SidebarSVG';
const LeftSideBar = ({ toggleLeftBar, colorMode }) => {
  const textColor = useColorModeValue('white');
  return (
    <Box
      rounded={{ base: 0, md: '10px' }}
      className={
        colorMode === 'light' ? 'bg-white h-full' : 'bg-stone-800 h-full'
      }
    >
      <Box className='flex flex-col gap-[100px] '>
        {/* leftsidebar visibility */}
        <Box display={{ md: 'none' }} className='flex m-6 gap-8'>
          <img src={logo} alt='logo' />
          <Text className='text-2xl mt-2'>
            Medi<span className='text-red-600 font-bold '>Doc</span>
          </Text>
          <img
            className='ml-[20px] mt-2 cursor-pointer'
            onClick={toggleLeftBar}
            src={sideArrow}
            alt=''
          />
        </Box>
        <SidebarSVG colorMode={colorMode} />
        <div className='mt-[50px] ml-[50px]'>
          <Box
            display={{ md: 'none' }}
            className='bg-red-600 w-[150px] h-[50px] rounded-[5px] cursor-pointer'
          >
            <Text color={textColor} className='text-center pt-3'>
              {' '}
              New Appointment
            </Text>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default LeftSideBar;
