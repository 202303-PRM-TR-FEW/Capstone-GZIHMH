import React from 'react';

const FinishedCourses = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-center bg-blue-300 rounded-lg p-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-check w-12 h-12 text-white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l5 5l10 -10" />
          </svg>
        </div>
        <h2 className="text-lg font-bold mb-2 text-black">FINISHED COURSES</h2>
        <p className="text-2xl font-bold text-black flex items-center justify-center">3</p>
      </div>
    </div>
  );
};

export default FinishedCourses;
