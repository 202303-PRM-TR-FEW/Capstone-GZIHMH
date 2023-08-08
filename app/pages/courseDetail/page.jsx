"use client";
import React, { useState } from "react";
import ProgressCourses from "@/components/ProgressCourses";
import CourseVideo from "@/components/CourseVideo";
import {initialLessons} from "@/utils/coursesdb";

import {firestore} from "@/utils/firebase";

const CoursesDetails = () => {
  const [showVideos, setShowVideo] = useState(true);

  // console.log(data);
  const info = initialLessons;
  console.log("info is " ,info)
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
    </div>
  );
};

export default CoursesDetails;