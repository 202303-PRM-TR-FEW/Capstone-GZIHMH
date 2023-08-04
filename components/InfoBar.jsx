import React from 'react';
import InfoBarData from '../utils/InfoBarData';
import Image from 'next/image';

// SVG component for the map pin icon
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin-filled" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" strokeWidth="0" fill="currentColor" />
  </svg>
);

const InfoBar = (props) => {
  const { courses, followers, following } = InfoBarData;

  return (
    <div className='p-3 w-full'>
      <div className="flex flex-row w-full">
        <div className='m-4'>
          <Image src={props.image} alt="profile image" width={300} height={300} className='rounded-full bg-cover bg-center bg-no-repeat w-32 h-28 object-cover overflow-hidden' />
        </div>
        <div className='flex flex-col w-full '>
          <div className='flex flex-col'>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{props.name}</h1>
            <p className="text-sm font-bold text-gray-500 mb-2 flex items-center">
              <MapPinIcon /> <span className="ml-2">{props.country}</span>
            </p>
          </div>
          <div className="flex justify-center items-center mb-4 ">
            <div className="flex flex-row items-center bg-gray-100 rounded-3xl w-full border-8 p-4 m-auto border-white">
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{courses}</span>
                <span className="text-gray-900 text-xs uppercase font-bold ">My COURSES</span>
              </div>
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{followers}</span>
                <span className="text-gray-900 text-xs uppercase font-bold ">FOLLOWERS</span>
              </div>
              <div className="flex flex-col items-center w-full">
                <span className="text-lg font-bold mb-2 text-gray-900">{following}</span>
                <span className="text-xs uppercase text-gray-900 font-bold ">FOLLOWING</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default InfoBar;
