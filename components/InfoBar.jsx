import React from 'react';
import InfoBarData from '../utils/InfoBarData';


const InfoBar = () => {
  const { courses, followers, following } = InfoBarData;

  return (
    <div className="flex justify-center items-center mb-4">
      <div className="flex justify-between items-center bg-gray-100 rounded-lg p-4 w-96 h-20 border-2 border-white">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold mb-2 text-black">{courses}</span>
          <span className="text-gray-500 text-xs uppercase text-black">My COURSES</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold mb-2 text-black">{followers}</span>
          <span className="text-gray-500 text-xs uppercase text-black">FOLLOWERS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold mb-2 text-black">{following}</span>
          <span className="text-gray-500 text-xs uppercase text-black">FOLLOWING</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
