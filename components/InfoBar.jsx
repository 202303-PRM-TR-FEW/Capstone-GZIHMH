import React from 'react';

const InfoBar = ({ courses, followers, following }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-between items-center bg-gray-100 rounded-lg p-4 w-72 h-20 border-2 border-white">
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold mb-1">{courses}</span>
          <span className="text-gray-500 text-xs uppercase">My COURSES</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold mb-1">{followers}</span>
          <span className="text-gray-500 text-xs uppercase">FOLLOWERS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-lg font-bold mb-1">{following}</span>
          <span className="text-gray-500 text-xs uppercase">FOLLOWING</span>
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
