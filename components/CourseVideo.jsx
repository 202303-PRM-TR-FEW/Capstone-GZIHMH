import React from "react";
import Image from "next/image";
import coursesdb from "@/utils/coursesdb";
const CourseVideo = ({ info, active }) => {
  return (
    <div>
      <iframe src={active} title={linkTitle} allowFullScreen />
      <div>
        <Image
          src={coursesdb.initialUsers.profilePic}
          alt="Pic"
          height={20}
          width={50}
        />
        <p>{coursesdb.initialUsers.name}</p>
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
          <p>{coursesdb.initialCourses.description}</p>
        </div>
      </div>
    </div>
  );
};
export default CourseVideo;
