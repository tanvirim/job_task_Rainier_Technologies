import AppointmentCard from './AppointmentCard';
import { useColorMode } from '@chakra-ui/react';
const Upcoming = () => {
  const { colorMode } = useColorMode();
  // Get current date and time
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDateOfMonth = currentDate.getDate();
  const getMonthName = (monthNumber) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return months[monthNumber];
  };

  const appointments = [
    {
      year: currentYear,
      month: getMonthName(currentMonth),
      date: currentDateOfMonth + 1,
      DrName: 'Dr. Emily Smith',
      speciality: 'Dermatology',
      slot: 'evening',
      time: '4:30 PM',
    },

    {
      year: currentYear,
      month: getMonthName(currentMonth),
      date: currentDateOfMonth + 3,
      DrName: 'Dr. Sarah Anderson',
      speciality: 'Neurology',
      slot: 'evening',
      time: '6:00 PM',
    },
    {
      year: currentYear,
      month: getMonthName(currentMonth),
      date: currentDateOfMonth + 4,
      DrName: 'Dr. William Brown',
      speciality: 'Pediatrics',
      slot: 'morning',
      time: '11:30 AM',
    },
    {
      year: currentYear,
      month: getMonthName(currentMonth),
      date: currentDateOfMonth + 5,
      DrName: 'Dr. Laura Wilson',
      speciality: 'Ophthalmology',
      slot: 'evening',
      time: '5:45 PM',
    },
  ];
  return (
    <div
      style={{
        backgroundColor:
          colorMode === 'light' ? 'rgb(255, 255, 255)' : 'rgba(44, 34, 34,.7)',
      }}
      className='overflow-y-auto p-2 mx-4 rounded-md'
    >
      <h1 className='font-bold text-xl px-2 my-4'>Upcoming Appointment</h1>

      <div className='flex flex-col '>
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
