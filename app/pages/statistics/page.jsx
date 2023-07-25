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
  );
};

export default page;
