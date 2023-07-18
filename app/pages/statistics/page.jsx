import React from "react";
import LastYearComparison from "@/components/LastYearComparison";
import StatisticsGoalStreak from "@/components/StatisticsGoalStreak";
import Activities from "@/components/Activities";

const page = () => {
  return (


    <div className=" flex flex-row  items-center "> 


        <div className="flex flex-col "> 
                           <StatisticsGoalStreak />
        </div>




        <div className=" flex flex-col  ">
              <div className="m-6 ">
                    <h3 className="text-black "> My Activity </h3>
                          <Activities />
              </div>
                  

                    <div className="m-2"> 
                        <h3 className="text-black m-2"> Last Year Comparison </h3>
                           <LastYearComparison />
                    </div>
                    
        </div>

     






    </div>


  );
};

export default page;
