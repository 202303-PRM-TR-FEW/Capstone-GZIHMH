import React from "react";
import Image from "next/image";
import {initialUsers, initialCourses} from "@/utils/coursesdb";
const CourseVideo = ({ info, active }) => {
  return (
    <div>
      <iframe src={active} title={info.linkTitle} allowFullScreen />
      <div>
        <Image
          src={initialUsers[0].profilePic}
          alt="Pic"
          height={20}
          width={50}
        />
        <p>{initialUsers[0].name}</p>
      </div>
      <div>
        <div>
          <p>{info.duration}</p>
        </div>
        <div>
          <p>{`${info.rating}/5.0`}</p>
        </div>
        <div>
          <h1>Course Discription</h1>
          <p>{initialCourses[0].description}</p>
        </div>
      </div>
    </div>
  );
};
export default CourseVideo;
