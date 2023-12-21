/* eslint-disable react/prop-types */
import sideArrow from '../assets/leftSideBar/sideArrow.svg';
import { Text, useColorModeValue } from '@chakra-ui/react';
import logo from '../assets/leftSideBar/logo.svg';
import SidebarSVG from './SidebarSVG';
const LeftSideBar = ({ toggleLeftBar, colorMode }) => {
  const textColor = useColorModeValue('white');
  return (
    <div
      className={
        colorMode === 'light' ? 'bg-white h-full' : 'bg-red-950 h-full'
      }
    >
      <div className='flex flex-col gap-[100px] '>
        <div className='flex m-6 gap-8'>
          <img src={logo} alt='logo' />
          <h1 className='text-2xl mt-2'>
            Medi<span className='text-red-600 font-bold '>Doc</span>
          </h1>
          <img
            className='ml-[20px] mt-2 cursor-pointer'
            onClick={toggleLeftBar}
            src={sideArrow}
            alt=''
          />
        </div>
        <SidebarSVG colorMode={colorMode} />
        <div className='mt-[50px] ml-[50px]'>
          <button className='bg-red-600 w-[150px] h-[50px] rounded-[5px] cursor-pointer'>
            <Text color={textColor} className='text-center'>
              {' '}
              New Appointment
            </Text>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
