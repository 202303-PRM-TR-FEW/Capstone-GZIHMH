'use client'
import React, { useState ,useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import addFriend from '@/app/pages/api/addFriend';

// Import the data from the file

const FriendsSuggestion = ({user, friends }) => {
  const [isViewAll, setIsViewAll] = useState(false)  
  const [displayedFriends, setDisplayedFriends] = useState(friends);
  const [slicedFriends, setSlicedFriends] = useState(friends.slice(0, 2));
  const [viewedFriends,setViewedFriends] = useState(friends)

  useEffect(() => {
    setViewedFriends(isViewAll ? displayedFriends : slicedFriends);
  }, [isViewAll, displayedFriends,slicedFriends]);

  const handleRemoveFriend = (friendName) => {
    const updatedFriends = displayedFriends.filter((friend) => friend.id !== friendName);
    setDisplayedFriends(updatedFriends);
    setSlicedFriends(updatedFriends.slice(0,2))
  };
  const handleAddFriend = async (friendId) =>{
    await addFriend(user, friendId)
    handleRemoveFriend(friendId)
  }
  return (
    <div className='flex flex-col w-full m-2 bg-white rounded-2xl shadow-lg p-4'>
      
      {viewedFriends.map((friend) => (
              <div key={friend} className="py-3 sm:py-1 flex flex-row w-full items-center">
                
                  <div className="flex-shrink-0">
                    <Image
                      src={friend.profilePicture}
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
                  <div className="flex ">
            <button onClick={()=>handleAddFriend(friend.id)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-medium    px-2 rounded-lg">
                      +
                    </button>
            <button
              onClick={()=>handleRemoveFriend(friend.id)}
              className="text-gray-500 hover:text-red-500 font-medium py-1 px-2 rounded-lg">
                      X
                    </button>
                  </div>
                
              </div>
            ))}

      <hr className="my-2 mt-8 hidden md:flex border-gray-300 " />
      <div className="">
        <button
          href="#"
          className=" ml-2 text-sm font-bold text-blue-500 hover:underline "
          onClick={()=>setIsViewAll(!isViewAll)}
        >
           {isViewAll ? 'SHOW LESS' : 'VIEW ALL'}
        </button>
      </div>
    </div>
    
  );
};

export default FriendsSuggestion;
