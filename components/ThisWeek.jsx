import React from 'react';

const ThisWeek = () => {
  return (

    <div className="flex flex-row  justify-between">


    <div className="day-container flex flex-col items-center   m-7 ">
      <div className="progress-bar bg-gray-200   w-4   h-48   rounded-xl   flex flex-col justify-end">
        <div className="progress-indicator bg-blue-500   rounded-xl   h-2/3"></div>
      </div>
      <div className="font-bold text-black mt-2">Mon</div>
    </div>


    <div className="day-container flex flex-col items-center   m-7">
      <div className="progress-bar bg-gray-200   w-4 h-48    rounded-xl  flex flex-col justify-end">
        <div className="progress-indicator bg-blue-500  rounded-xl  h-3/5"></div>
      </div>
      <div className="font-bold text-black mt-2">Tue</div>
    </div>


    <div className="day-container flex flex-col items-center   m-7">
      <div className="progress-bar bg-gray-200   w-4   h-48   rounded-xl  flex flex-col justify-end">
        <div className="progress-indicator bg-blue-500   rounded-xl   h-4/5"></div>
      </div>
      <div className="font-bold text-black mt-2">Wed</div>
    </div>


    <div className="day-container flex flex-col items-center   m-7">
      <div className="progress-bar bg-gray-200   w-4   h-48   rounded-xl   flex flex-col justify-end">
        <div className="progress-indicator bg-blue-500   rounded-xl   h-2/4"></div>
      </div>
      <div className="font-bold text-black mt-2">Thu</div>
    </div>


    <div className="day-container flex flex-col items-center   m-7">
      <div className="progress-bar bg-gray-200   w-4   h-48 rounded-xl flex flex-col justify-end">
        <div className="progress-indicator bg-blue-500   rounded-xl   h-1/3"></div>
      </div>
      <div className="font-bold text-black mt-2">Fri</div>
    </div>


    <div className="day-container flex flex-col items-center   m-7">
      <div className="progress-bar bg-gray-200   w-4   h-48   rounded-xl   flex flex-col justify-end">
        <div className="progress-indicator bg-blue-500   rounded-xl   h-5/6"></div>
      </div>
      <div className="font-bold text-black mt-2">Sat</div>
    </div>


    <div className="day-container flex flex-col items-center   m-7">
      <div className="progress-bar bg-gray-200    w-4   h-48   rounded-xl   flex flex-col justify-end">
        <div className="progress-indicator bg-blue-500   rounded-xl   h-1/2"></div>
      </div>
      <div className="font-bold text-black mt-2">Sun</div>
    </div>
  </div>

  

  );
};

export default ThisWeek;
