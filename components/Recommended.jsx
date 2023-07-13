import React from "react";
import Image from "next/image";
import db from "@/utils/db";
const Recommended = ({ thumbnail, courseName, tutorName }) => {
  return (
    <div className="mr-3 ">
      <div className="thumbnail_container ">
        <Image
          src={thumbnail}
          alt="thumbnail image"
          width={176}
          height={128}
          className="w-full h-full "
        />
      </div>

      <div className="course_details">
        <h2 className="course_name">{courseName}</h2>
        <p className="tutor_name"> {tutorName}</p>
      </div>
    </div>
  );
};

export default Recommended;
