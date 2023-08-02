import React from 'react';

const ThisWeek = ({ progressData }) => {
  return (
    <div className="flex flex-row justify-between">
      {progressData.map((progress, index) => (
        <div className="day-container flex flex-col items-center m-7" key={index}>
          <div className="progress-bar bg-gray-200 w-4 h-48 rounded-xl flex flex-col justify-end">
            <div
              className="progress-indicator bg-blue-500 rounded-xl"
              style={{ height: `${progress * 100}%` }}
            ></div>
          </div>
          <div className="font-bold text-black mt-2">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThisWeek;
