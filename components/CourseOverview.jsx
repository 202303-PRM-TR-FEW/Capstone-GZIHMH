import React, { useState } from 'react';

const CourseOverview = ({ title, numberOfVideos, text }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <div className={`bg-white p-6 rounded-3xl shadow-md w-90 relative ${isDropdownOpen ? 'open' : ''}`}>
        <div className="flex-grow">
          <h2 className="text-xl mb-4">{title}</h2>
          <p className="text-gray-400">
            {numberOfVideos} {text}
          </p>
        </div>
        <button
          onClick={toggleDropdown}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent border-0 p-2 cursor-pointer"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`icon icon-tabler icon-tabler-math-greater ${
              isDropdownOpen ? 'rotate-90' : ''}`}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#9e9e9e"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 18l14 -6l-14 -6" />
          </svg>
        </button>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full right-0  w-full">
          <div className="bg-white rounded-3xl shadow-md">
            <ul className="p-0 m-0">
              <li className="p-6 border-b border-gray-200">
                <a href="#">Option 1</a>
              </li>
              <li className="p-6 border-b border-gray-200">
                <a href="#">Option 2</a>
              </li>
              <li className="p-6">
                <a href="#">Option 3</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseOverview;
