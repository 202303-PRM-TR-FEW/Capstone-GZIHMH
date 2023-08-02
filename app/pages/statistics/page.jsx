import React from "react";
import LastYearComparisonContainer from "@/components/LastYearComparisonContainer";
import StatisticsGoalStreak from "@/components/StatisticsGoalStreak";
import MyActivitiesBox from "@/components/MyActivitiesBox";
import ThisWeekContainer from "@/components/ThisWeekContainer";
import MyPerformance from "@/components/MyPerformance";



const CheckIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-book" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
  <path d="M3 6l0 13" />
  <path d="M12 6l0 13" />
  <path d="M21 6l0 13" />
</svg>
`;


const CheckIcon2 = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-hourglass-low" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff9300" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M6.5 17h11" />
  <path d="M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z" />
  <path d="M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z" />
</svg>
`;


const CheckIcon3 = `
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-checks" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#7bc62d" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M7 12l5 5l10 -10" />
  <path d="M2 12l5 5m5 -5l5 -5" />
</svg>`;




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
  
                

  <h5 className=" text-black text-2xl font-bold my-2 ">My Performance</h5>


  <div className='flex flex-row w-full'>
                <div className='w-full'>
                  <MyPerformance
                    imageSrc={CheckIcon}
                    title="TIME SPENT"
                    count={31.8}
                    text="hours"
                    backgroundColor="bg-blue-50"
                    
                  />
                </div>
                <div className='w-full'>
                  <MyPerformance
                    imageSrc={CheckIcon2}
                    title="AVERAGE/DAY"
                    count={4.6}
                    text="hours"
                    backgroundColor="bg-orange-100"
                    
                  />
                </div>
                <div className='w-full'>
                  <MyPerformance
                    imageSrc={CheckIcon3}
                    title="FINISHED COURSES"
                    count={12}
                    text="courses"
                    
                    backgroundColor="bg-lime-100"
                  />

                  
                </div>
               
              </div>



  </div>

  


 </div>








{/* Right Column */}
<div className="flex flex-col  p-4 space-y-4 bg-gray-100 rounded-lg mt-2"> 




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
