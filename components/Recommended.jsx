// components/Recommended.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Recommended = (props) => {
  return (
    <div className="mr-3">
      <div className="thumbnail_container">
        <Image
          src={props.thumbnail}
          alt="thumbnail image"
          width={176}
          height={128}
          className="w-full h-full"
        />
      </div>
      <div className="course_details w-44 ml-2">
        <p className="text-sm font-bold text-gray-900 ">{props.courseName}</p>
        <Link href={props.path} className="tutor_name">
        {props.tutorName}
        </Link>
      </div>
    </div>
  );
};

export default Recommended;
