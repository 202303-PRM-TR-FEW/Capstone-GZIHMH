
import React from 'react'
import Activities from './Activities'

const MyActivitiesBox = () => {
  return (
    

            

    <div>  

<div className="flex items-center justify-between mb-4   w-34  ">
  <h5 className="text-2xl font-bold leading-none text-gray-900 dark:text-white"> My Activiy </h5>
</div> 
  

<div className="w-full max-w-3xl p-1 bg-white border border-gray-200 rounded-3xl shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">

<Activities />
      


</div>
</div>
  )
}

export default MyActivitiesBox
