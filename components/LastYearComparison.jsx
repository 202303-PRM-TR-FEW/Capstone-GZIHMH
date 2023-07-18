import React from 'react';

const LastYearComparison = () => {
  const ProgressBar = ({ label, progress }) => {
    const progressWidth = `${progress}%`;

    return (
      <div className="flex items-center">
        <p className="text-gray-700 mr-2 text-base">{label}</p>
        <div className="relative flex-grow bg-blue-200 rounded-full h-6">
          <div
            className="absolute top-0 left-0 bg-blue-500 rounded-full h-full"
            style={{ width: progressWidth }}
          ></div>
          <div
            className="absolute top-0 bg-white rounded-full w-8 h-8 flex items-center justify-center"
            style={{ left: progressWidth }}
          >
            <p className="text-blue-500 text-sm font-semibold">{progress}%</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" bottom-4 right-4 w-auto">
      <div className="bg-white rounded-lg p-4">
        <div className="flex flex-col gap-4">
          <ProgressBar label="Study Time" progress={75} />
          <hr className="border-gray-300 my-2" />
          <ProgressBar label="Hours Learned" progress={50} />
          <hr className="border-gray-300 my-2" />
          <ProgressBar label="Finished Courses" progress={75} />
        </div>
      </div>
    </div>
  );
};

export default LastYearComparison;
