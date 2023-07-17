import React from "react";
import LastYearComparison from "@/components/LastYearComparison";
import StatisticsGoalStreak from "@/components/StatisticsGoalStreak";
import Activities from "@/components/Activities";

const page = () => {
  return (
    <div>
      <Activities />
      <LastYearComparison />
      <StatisticsGoalStreak />
    </div>
  );
};

export default page;
