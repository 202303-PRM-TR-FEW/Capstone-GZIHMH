import React from 'react';
import Image from 'next/image';
import FriendsData from '../utils/FriendsData';
import Link from 'next/link';
const Friends = () => {
  return (
    <div className='flex flex-col w-full m-2 bg-white rounded-2xl shadow-lg p-4'>
      
      {FriendsData.map((friend, index) => (
              <div key={friend.id} className="py-3 sm:py-1 flex flex-row w-full items-center">
                
                  <div className="flex-shrink-0">
                    <Image
                      src={friend.image}
                      width={500}
                      height={500}
                      alt={`Picture of ${friend.name}`}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="w-full">
                    <p className="w-full text-md font-medium text-gray-900 truncate dark:text-white">
                      {friend.name}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-bold text-blue-500 dark:text-white">
                    <a href={friend.profileLink}>PROFILE</a>
                  </div>
                            
              </div>
            ))}

      <hr className="my-2 mt-8 hidden md:flex border-gray-300 " />
      <div className="">
        <Link
          href="#"
          className=" ml-2 text-sm font-bold text-blue-500 hover:underline "
        >
          VIEW ALL
        </Link>
      </div>
    </div>
    
  );
};

export default Friends;



