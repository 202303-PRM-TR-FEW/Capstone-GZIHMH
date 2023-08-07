import React from 'react';
import CourseOverview from '@/components/CourseOverview';
import Details from '@/components/Details';

const page = () => {
  return (
    <div className="flex">
      <div className="flex-1">
        <Details />
      </div>
      <div className="flex-1 bg-white p-4">
        <div className="">
          {/* Other elements you may want to add inside the white container */}
          <div>
            <h2 className="text-xl text-gray-600 mt-[-10px]">Course Overview</h2>
          </div>
          
          {/* Add spacing between CourseOverview components */}
          <div className="space-y-4">
            <CourseOverview title="Introduction" numberOfVideos={1} text="video" />
            <CourseOverview title="1.Camera configuration" numberOfVideos={4} text="videos" />
            <CourseOverview title="2.Exposures" numberOfVideos={7} text="videos" />
            <CourseOverview title="3.photo composition" numberOfVideos={7} text="videos" />
            <CourseOverview title="4.Skill test" numberOfVideos={3} text="videos" />
            {/* Add more CourseOverview components here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
