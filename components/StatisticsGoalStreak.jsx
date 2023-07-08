import React from 'react'

const StatisticsGoalStreak = () => {
  return (
    <div className="flex">
    <div className="flex-1 mr-4">
      {/* Card 1 */}
      <div className="bg-blue-200 p-4 flex flex-col items-center">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2L6 8l6 6 6-6M6 8h12"
            />
          </svg>
          <h2 className="text-xl font-bold">Goal</h2>
        </div>
        <div className="bg-blue-400 text-white rounded p-2">
          <p className="text-lg">2/3 days</p>
        </div>
      </div>
    </div>
    <div className="flex-1">
      {/* Card 2 */}
      <div className="bg-green-200 p-4 flex flex-col items-center">
        <div className="flex items-center mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2 text-yellow-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 2L6 8l6 6 6-6M6 8h12"
            />
          </svg>
          <h2 className="text-xl font-bold">STREAK</h2>
        </div>
        <p className="text-xl font-bold">103 days</p>
      </div>
    </div>
  </div>
);
};

export default StatisticsGoalStreak
