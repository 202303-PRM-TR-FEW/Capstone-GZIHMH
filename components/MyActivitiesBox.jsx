
import React from 'react'
import Activities from './Activities'
import MyActivityData from "../utils/MyActivityData";

const MyActivitiesBox = () => {
  return (
    

            

    <div>  

<div className="flex items-center justify-between mb-4   w-34  ">
  <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
</div> 
  

<div className="w-full max-w-3xl p-1 bg-white border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

<Activities dayTitle="Monday" activityData={MyActivityData} />
      


</div>
</div>
  )
}

export default MyActivitiesBox
