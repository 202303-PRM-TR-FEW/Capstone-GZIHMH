import React, { useState } from 'react';

const CourseOverview = ({ title, numberOfVideos, text }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-white p-6 rounded-3xl shadow-md w-90 relative">
      <div className="flex-grow">
        <h2 className="text-xl mb-4">{title}</h2>
        <p className="text-gray-400">
          {numberOfVideos} {text}
        </p>
      </div>
      <button
        onClick={toggleDropdown}
        className="absolute top-0 right-0 bg-transparent border-0 p-2 cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`icon icon-tabler icon-tabler-math-greater ${
            isDropdownOpen ? 'rotate-90' : ''}`}
          width="44"
          height="44"
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
      {isDropdownOpen && (
        <div className="absolute top-10 right-0 bg-white border rounded shadow-md py-2 px-4">
          {/* Dropdown content */}
          <ul className="list-none">
            <li>
              <a href="#">Option 1</a>
            </li>
            <li>
              <a href="#">Option 2</a>
            </li>
            <li>
              <a href="#">Option 3</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseOverview;
