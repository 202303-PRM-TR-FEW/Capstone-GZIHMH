import React from 'react';

const CourseOverview = ({ title, numberOfVideos, text }) => {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md w-90 flex items-center">
      <div className="flex-grow">
        <h2 className="text-xl mb-4">{title}</h2>
        <p className="text-gray-400"> {numberOfVideos} {text}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-math-greater"
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
    </div>
  );
};

export default CourseOverview;
