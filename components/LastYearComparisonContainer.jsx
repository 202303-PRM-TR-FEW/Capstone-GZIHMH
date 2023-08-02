import React from 'react'
import LastYearComparison from './LastYearComparison'

const LastYearComponentContainer = () => {
  return (
    <div>


    <div> <p className='text-black text-2xl font-bold my-6 '> Last Year Comparison </p> </div>


<div class=" bg-white  rounded-2xl   shadow-md p-10 flex justify-center items-center ">



<LastYearComparison
        studyTimePercentage={45}
        hoursLearnedPercentage={20}
        finishedCoursesPercentage={70}
      />
   </div>




    </div>
  )
}

export default LastYearComponentContainer
