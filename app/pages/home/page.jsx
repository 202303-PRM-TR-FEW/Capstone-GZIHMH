import React from "react";
import FeaturedCourses from "@/components/FeaturedCourses";
import HomeCategories from "@/components/HomeCategories";
import MyLearning from "@/components/MyLearning";

const Page = () => {
  return (
    <section>
      <div>
        <h2 className="p-2 font-bold">Featured Courses</h2>
        <div className="flex flex-col items-center justify-center mt-10 space-x-0 space-y-12 md:flex-row md:space-x-8 md:space-y-0">
          <FeaturedCourses />
        </div>
      </div>
      <h2 className="p-2 font-bold">Categories</h2>
      <li>
        <HomeCategories />
      </li>

      <div>
        <h2 className="p-2 font-bold">My Learning</h2>
      </div>
      <div className="flex flex-col items-center md:flex-row">
        <MyLearning />
      </div>

      <div className="flex justify-center mx-auto mt-8 w-200">
        <button className="px-20 py-3 font-bold text-white bg-blue-500 hover:bg-blue-700 rounded-xl">
          59$
        </button>
      </div>
    </section>
  );
};

export default Page;
