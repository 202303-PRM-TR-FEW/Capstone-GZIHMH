import React from 'react'

const StatisticsGoalStreak = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='rounded-2xl bg-white w-100 h-30 flex flex-col'>
        <div className='flex items-center justify-center flex-grow'> 
        
          <div className='text-gray-600 px-6 p-3  '>GOAL</div>
        </div>
        <div className='bg-blue-50 p-3 px-10 my-3 mx-7  rounded-2xl '>
            <p className='text-blue-500'>2/3 days</p>
          </div>
      </div>
    </div>
  );
};

export default StatisticsGoalStreak
