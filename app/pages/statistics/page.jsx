import React from "react";
import LastYearComparison from "@/components/LastYearComparison";
import StatisticsGoalStreak from "@/components/StatisticsGoalStreak";
import Activities from "@/components/Activities";
import MyActivitiesBox from "@/components/MyActivitiesBox";

import ThisWeekContainer from "@/components/ThisWeekContainer";

const page = () => {
  return (
  


<div className="flex flex-col sm:flex-row   justify-between   space-y-4 sm:space-y-0 sm:space-x-4  ">




{/* Left Column */}
<div className="flex flex-col p-1 bg-gray-100 rounded-lg  mr-20 ">

 


  <div className="m-1">  * {/* box 1 */}
  <ThisWeekContainer />
  </div>
  

  <div className="m-1">   {/* box 2 */}
  <StatisticsGoalStreak />
  </div>

 </div>



{/* Right Column */}
<div className="flex  flex-col py-10 space-y-4 bg-gray-100 rounded-lg ml-10 "> 



<div className="m-1 ">   {/* box 3 */}
<MyActivitiesBox />
</div>


<div className="">  {/* box 4 */}

</div> 
  


</div>

</div>















  );
};

export default page;
