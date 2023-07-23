import React from 'react'
import ThisWeek from './ThisWeek'

const ThisWeekContainer = () => {
  return (

    <div>


    <div>
       <div className="font-bold text-3xl text-black mb-2"> This Week </div>
    </div>


    <div className="w-full max-w-4xl p-1 bg-white border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
       <div className=" text-md  text-gray-400 mb-1">Time Spent</div>
       <div className="font-semibold text-black mb-4 mt-1">31.8 hours</div>
         <ThisWeek />


    </div>
</div>

  )
}

export default ThisWeekContainer
