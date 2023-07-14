import React from "react";
import Image from "next/image";
import Link from "next/link";
import FeaturedCoursesImage from "../public/assets/images/background2.jpeg";
import FeaturedTeachersImage from "../public/assets/images/profilePic1.jpeg";

const FeaturedCourses = () => {
  return (
    <div className="rounded-md shadow-xl w-212 h-92 rounded-26 bg-white-300">
      <Image
        src={FeaturedCoursesImage}
        width={200}
        height={180}
        alt={"Featured Courses Images"}
        className="rounded-[20px] max-w-[300px]"
      />
      <div className="absolute">
        <div className="flex items-center max-w-sm ml-5 -mt-20 rounded-md shadow-xl">
          <Image
            src={FeaturedTeachersImage}
            width={32}
            height={32}
            alt={"Featured Teachers Images"}
            className="w-16 h-16 rounded-full"
          />
          <p className="font-medium text-gray-900 flex-center">John Eames</p>
        </div>
      </div>
      <div className="flex flex-col justify-between py-4 m-2">
        <div>
          <div className="flex items-center">
            <h2>Power BI</h2>
          </div>
          <p className="flex items-center">
            <p className="text-sm text-gray-500">
              <span className="font-medium text-gray-900">⏲1h 53m</span>
            </p>
            <p className="px-4 text-sm text-gray-500">
              <span className="font-medium text-gray-900">★4.9/5</span>
            </p>
            <Link></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
