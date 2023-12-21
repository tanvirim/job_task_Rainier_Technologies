/* eslint-disable react/prop-types */
import { Text, Box, useColorModeValue } from '@chakra-ui/react';

const AppointmentCard = ({ appointment }) => {
  const bgColor = useColorModeValue('red-50', 'black');
  const textColor = useColorModeValue('black', 'black');

  return (
    <div className='flex rounded-lg shadow-md  m-2'>
      <div className='flex flex-col justify-center  bg-white rounded-xl p-2 border-2 border-solid'>
        <Text className='opacity-70' color={textColor}>
          {appointment.year}
        </Text>
        <Text className='font-bold' color={textColor}>
          {appointment.date}
        </Text>
        <Text className='opacity-70 text-2xl' color={textColor}>
          Jan
        </Text>
      </div>
      <Box
        className={`flex flex-col gap-4 bg-${bgColor} p-2 w-full rounded-r-lg`}
      >
        <div className='flex flex-col'>
          <Text className='font-semibold text-xl'>{appointment.DrName}</Text>
          <Text>{appointment.speciality}</Text>
        </div>
        <Box bg='white' className='flex' rounded={4}>
          <Text color={textColor} padding={1}>
            <span className='text-slate-600 mr-2'>Slot</span>
            {appointment.slot}
          </Text>
          <Text color={textColor} bg='white' padding={1}>
            <span className='text-slate-600 mr-2'>Time</span>
            {appointment.time}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export default AppointmentCard;
