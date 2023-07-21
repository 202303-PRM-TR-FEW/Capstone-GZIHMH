import React from 'react';
import Image from 'next/image';

// Import the data from the file
import FriendsSuggestionData from '../utils/FriendsSuggestionData';

const FriendsSuggestion = () => {
  return (
    <div>
      <div>
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white mb-4">
          Friend Suggestions
        </h5>
      </div>

      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div className="flow-root">
          <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
            {FriendsSuggestionData.map((friend) => (
              <li key={friend.id} className="py-3 sm:py-1">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      src={friend.profilePic}
                      width={500}
                      height={500}
                      alt={`Picture of ${friend.name}`}
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {friend.name}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-1 px-2 rounded-lg">
                      +
                    </button>
                    <button className="text-gray-500 hover:text-red-500 font-medium py-1 px-2 rounded-lg">
                      x
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            VIEW ALL
          </a>
        </div>
      </div>
    </div>
  );
};

export default FriendsSuggestion;
