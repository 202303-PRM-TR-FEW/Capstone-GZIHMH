import React from 'react';

const ProgressStat = ({ label, percentage }) => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <h className='text-gray-600 text-sm'>{label}</h>
      <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mx-2 mt-3 flex items-center">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-right p-0.5 leading-none rounded-full" style={{ width: `${percentage}%` }}>
          {percentage}%
        </div>
      </div>
    </div>
  );
};

const LastYearComparison = ({ studyTimePercentage, hoursLearnedPercentage, finishedCoursesPercentage }) => {
  return (
    <div className='my-4'>
      <ProgressStat label='STUDY TIME' percentage={studyTimePercentage} />
      <hr className="border-t-2 border-gray my-1 rounded-lg" />

      <ProgressStat label='HOURS LEARNED' percentage={hoursLearnedPercentage} />
      <hr className="border-t-2  border-gray my-1 rounded-lg" />

      <ProgressStat label='FINISHED COURSES' percentage={finishedCoursesPercentage} />
    </div>
  );
};

export default LastYearComparison;
