"use client";
import React, { useState } from "react";
import ProgressCourses from "@/components/ProgressCourses";
import CourseVideo from "@/components/CourseVideo";
import {initialLessons} from "@/utils/coursesdb";
import CourseOverview from "@/components/CourseOverview";

import {firestore} from "@/utils/firebase";

const CoursesDetails = () => {
  const [showVideos, setShowVideo] = useState(true);

  const info = initialLessons;
  const [active, setActive] = useState(0);

  const revealVideos = () => {
    setShowVideo((prevState) => !prevState);
  };

  const findVideo = (id) => {
    const video = info.find((video) => video.courseId === id);
    setActive(video.link);
  };

  return (
    <div>
      <ProgressCourses
        showVideos={showVideos}
        revealVideos={revealVideos}
        info={info}
      />
      <CourseVideo info = {info[0]} active={active} />
      <CourseOverview
        title="Your Course Title"
        numberOfVideos={10}
        text="Videos"
      />
    </div>
  );
};

export default CoursesDetails;
