import React from 'react'
import LastYearComparison from './LastYearComparison'

const LastYearComponentContainer = () => {
  return (
    <div>


<div className="flex items-center justify-between mb-4   w-34  ">
  <h5 className=" text-black text-2xl font-bold my-6 ">Last Year Comparison</h5>
</div> 


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
