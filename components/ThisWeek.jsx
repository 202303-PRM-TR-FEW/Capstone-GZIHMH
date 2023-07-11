import React from 'react';

const ThisWeek = () => {
  return (
    <div className="container bg-white rounded-lg p-4 absolute top-8 left-32 w-1/3 max-h-80vh overflow-y-auto">
      <div className="flex flex-col">
        <div className="font-bold text-black mb-2">Time Spent</div>
        <div className="font-semibold text-black mb-4">31.8 hours</div>
        <div className="flex flex-row justify-between">
          <div className="day-container flex flex-col items-center">
            <div className="progress-bar bg-gray-200 w-3 h-48 rounded-md flex flex-col justify-end">
              <div className="progress-indicator bg-blue-500 rounded-md h-2/3"></div>
            </div>
            <div className="font-bold text-black mt-2">Mon</div>
          </div>
          <div className="day-container flex flex-col items-center">
            <div className="progress-bar bg-gray-200 w-3 h-48 rounded-md flex flex-col justify-end">
              <div className="progress-indicator bg-blue-500 rounded-md h-3/5"></div>
            </div>
            <div className="font-bold text-black mt-2">Tue</div>
          </div>
          <div className="day-container flex flex-col items-center">
            <div className="progress-bar bg-gray-200 w-3 h-48 rounded-md flex flex-col justify-end">
              <div className="progress-indicator bg-blue-500 rounded-md h-4/5"></div>
            </div>
            <div className="font-bold text-black mt-2">Wed</div>
          </div>
          <div className="day-container flex flex-col items-center">
            <div className="progress-bar bg-gray-200 w-3 h-48 rounded-md flex flex-col justify-end">
              <div className="progress-indicator bg-blue-500 rounded-md h-2/4"></div>
            </div>
            <div className="font-bold text-black mt-2">Thu</div>
          </div>
          <div className="day-container flex flex-col items-center">
            <div className="progress-bar bg-gray-200 w-3 h-48 rounded-md flex flex-col justify-end">
              <div className="progress-indicator bg-blue-500 rounded-md h-1/3"></div>
            </div>
            <div className="font-bold text-black mt-2">Fri</div>
          </div>
          <div className="day-container flex flex-col items-center">
            <div className="progress-bar bg-gray-200 w-3 h-48 rounded-md flex flex-col justify-end">
              <div className="progress-indicator bg-blue-500 rounded-md h-5/6"></div>
            </div>
            <div className="font-bold text-black mt-2">Sat</div>
          </div>
          <div className="day-container flex flex-col items-center">
            <div className="progress-bar bg-gray-200 w-3 h-48 rounded-md flex flex-col justify-end">
              <div className="progress-indicator bg-blue-500 rounded-md h-1/2"></div>
            </div>
            <div className="font-bold text-black mt-2">Sun</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThisWeek;
