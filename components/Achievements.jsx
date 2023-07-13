import React from 'react';
import achievementsData from '../utils/achievementsData';


const Achievements = () => {
  return (
    <div className='flex flex-col items-start justify-center h-screen m-3'>
      <div>
        <h2 className='text-xl text-gray-900'>Achievements</h2>
      </div>

      {achievementsData.map((achievement, index) => (
        <div
          className={`bg-slate-50 shadow m-2 w-auto h-30 rounded-3xl flex flex-row ${
            index === 1 ? 'bg-lime-500' : 'bg-orange-100'
          }`}
          key={index}
        >
          <div className='bg-orange-100 w-20 h-20 rounded-2xl m-2 flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-hourglass-low'
              width='28'
              height='28'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#2c3e50'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M6.5 17h11' />
              <path d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z' />
              <path d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z' />
            </svg>
          </div>

          <div className='flex flex-col items-start'>
            <div className='flex flex-row items-center justify-between'>
              <div className='m-1 text-gray-900 font-bold ml-2 mr-10'>
                {achievement.title}
              </div>
              <div>
                <p className='text-gray-500 text-sm mt-4 mb-4 ml-20'>
                  {achievement.progress}
                </p>
              </div>
            </div>
            <div className='bg-gray-200 h-2 w-80 rounded-xl overflow-hidden mx-2'>
              <div
                className='h-full bg-orange-400 rounded-lg'
                style={{ width: achievement.percentage }}
              ></div>
            </div>
            <div className='m-1 ml-2 text-gray-500 text-sm'>
              {achievement.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
