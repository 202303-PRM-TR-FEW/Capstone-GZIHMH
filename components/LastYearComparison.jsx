import React from 'react';

const LastYearComparison = () => {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="mb-4">
        <p className="text-gray-700 mb-2">Study Time</p>
        <div className="bg-blue-200 rounded-full h-4">
          <div className="bg-blue-500 rounded-full h-4 w-2/3"></div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 mb-2">Hours Learned</p>
        <div className="bg-blue-200 rounded-full h-4">
          <div className="bg-blue-500 rounded-full h-4 w-1/2"></div>
        </div>
      </div>
      <div>
        <p className="text-gray-700 mb-2">Finished Courses</p>
        <div className="bg-blue-200 rounded-full h-4">
          <div className="bg-blue-500 rounded-full h-4 w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default LastYearComparison;
