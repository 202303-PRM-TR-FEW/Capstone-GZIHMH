
import React, {Suspense} from "react";
import LastYearComparison from "@/components/LastYearComparison";
import StatisticsGoalStreak from "@/components/StatisticsGoalStreak";
import Activities from "@/components/Activities";
import MyActivitiesBox from "@/components/MyActivitiesBox";
import Loading from '@/components/Loading';

const page = () => {
  return (
    <div>
        <div className="p-6 ">
        <Suspense fallback={<Loading />}>
        <MyActivitiesBox />
        </Suspense>
        </div>
      <LastYearComparison />
      <StatisticsGoalStreak />
    </div>

import React from "react";
import LastYearComparisonContainer from "@/components/LastYearComparisonContainer";
import StatisticsGoalStreak from "@/components/StatisticsGoalStreak";
import Activities from "@/components/Activities";
import MyActivitiesBox from "@/components/MyActivitiesBox";
import ThisWeekContainer from "@/components/ThisWeekContainer";

const page = () => {
  return (
  


<div className="flex flex-col sm:flex-row items-start m-5 justify-between gap-20 p-10 space-y-4 sm:space-y-0 sm:space-x-4  ">




{/* Left Column */}
<div className="flex flex-col p-1 bg-gray-100 rounded-lg">

  


  <div className="m-1">  * {/* box 1 */}
  <ThisWeekContainer />
  </div>
  






  <div className="m-1">   {/* box 2 */}
  <StatisticsGoalStreak />
  
  </div>


  <div className="m-1">   {/* box 3 (My performance component will be included later) */}
  
  </div>

  


 </div>








{/* Right Column */}
<div className="flex flex-col  p-4 space-y-4 bg-gray-100 rounded-lg"> 




<div className="m-1">   {/* box 4 */}

<MyActivitiesBox />

</div>





<div className=" ">  {/* box 5 */}

<LastYearComparisonContainer />


</div> 
  
  




</div>

</div>
















  );
};

export default page;
