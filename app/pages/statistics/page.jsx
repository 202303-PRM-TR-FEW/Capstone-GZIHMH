import React from "react";
import LastYearComparison from "@/components/LastYearComparison";
import StatisticsGoalStreak from "@/components/StatisticsGoalStreak";
import Activities from "@/components/Activities";
import MyActivitiesBox from "@/components/MyActivitiesBox";

const page = () => {
  return (
    <div>
        <div className="p-6 ">
        <MyActivitiesBox />
        </div>
      

      <LastYearComparison />
      <StatisticsGoalStreak />
    </div>
  );
};

export default page;
