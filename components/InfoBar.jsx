import React from 'react';
import InfoBarData from '../utils/InfoBarData';
import Image from 'next/image';

const InfoBar = (props) => {
  const { courses, followers, following } = InfoBarData;

  return (
    <div className='p-3 w-full'>
      <div className="flex flex-row w-full">
        <div className='m-4'>
          <Image src={props.image}
            alt="profile image"
            width={300}
            height={300}
            className='rounded-full bg-cover bg-center bg-no-repeat  w-32 h-28 object-cover overflow-hidden  '
            
          />
        </div>
        <div className='flex flex-col w-full '>
          <div className='flex flex-col'>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{props.name}</h1>

            <p className="text-sm font-bold text-gray-500 mb-2">{props.country} </p>
          </div>
          <div className="flex justify-center items-center mb-4 shadow-lg">
            <div className="flex flex-row items-center bg-gray-100 rounded-xl w-full border-4 p-4 m-auto border-white">
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{courses}</span>
                <span className="text-gray-900 text-xs uppercase ">My COURSES</span>
              </div>
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{followers}</span>
                <span className="text-gray-900 text-xs uppercase ">FOLLOWERS</span>
              </div>
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{following}</span>
                <span className="text-xs uppercase text-gray-900 ">FOLLOWING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default InfoBar;
