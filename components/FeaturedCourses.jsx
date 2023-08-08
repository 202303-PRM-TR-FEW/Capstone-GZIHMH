import React from 'react';
import Image from 'next/image';
import UserProfile from "@/components/UserProfile"
import { Clock,Star } from '@/utils/icons';
const FeaturedCourses = ({ imageSrc, alt, title, duration, rating, price, user_id, userProfileImage }) => {
  return (
   
      <div className=" bg-white  shadow-md rounded-3xl  cursor-pointer relative p-2">
        <div className=" rounded-2xl relative ">
          <Image
            src={imageSrc}
            alt={alt}
            width={800}
            height={300}
            className="object-cover h-28 m-0 "
          />
          {/* UserProfile component */}
          <div className="user-profile-container  absolute top-24 left-0 ml-3">
            {/* Pass the user_id and userProfileImage props to UserProfile */}
            <UserProfile user_id={user_id} image={userProfileImage} />
          </div>
          <p className="absolute right-2 top-3 bg-white rounded-xl p-2 cursor-pointer opacity-50 group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-6 w-6 group-hover:opacity-50 opacity-1"
              stroke="gray"
            >
              <path
                d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"
              ></path>
            </svg>
          </p>
        </div>
        <div className="pt-8 pl-2 mb-2">
          <p className="text-lg font-semibold text-gray-900 mb-0">{title}</p>
        <div className="flex items-center justify-between">
          <div className='flex flex-row '>
              <p className="flex items-center text-gray-900">
                  <Clock/>
                  <span className="" style={{ color: '#6b7280' }}>{duration}</span>
                </p>
                <p className="flex items-center py-2 px-2">
                  <Star/>
                  <span className="ml-1" style={{ color: '#6b7280' }}>{rating}</span>
                </p>
          </div>
          <div className='md:pr-2'>
            <div className="flex items-center justify-center box-border overflow-hidden outline-none cursor-default w-16 h-8 opacity-100 bg-blue-600 rounded-full border-0">
              <span className="flex items-center p-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-xl">
                  {price}
                </button>
              </span>
            </div>
          </div>
            
          </div>
        </div>
      </div>
    
  );
};

export default FeaturedCourses;
