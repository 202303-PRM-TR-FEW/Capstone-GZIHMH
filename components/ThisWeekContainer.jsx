
import React from 'react'
import ThisWeek from './ThisWeek'

const ThisWeekContainer = () => {
  const progressData = [0.67, 0.5, 0.8, 0.4, 0.33, 0.83, 0.5];

  return (

    <div>

<div className="flex items-center justify-between mb-4   w-34  ">
  <h5 className=" text-black text-2xl font-bold my-6 ">This Week</h5>
</div> 

    <div className="w-full max-w-4xl p-1 bg-white border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
       <div className=" text-md  text-gray-400 mb-1">Time Spent</div>
       <div className="font-semibold text-black mb-4 mt-1">31.8 hours</div>
       <ThisWeek progressData={progressData} />

    </div>
</div>

  )
}

export default ThisWeekContainer
