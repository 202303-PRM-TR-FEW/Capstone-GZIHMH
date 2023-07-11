import React from 'react';
import FeaturedCourses from '@/components/FeaturedCourses';
import HomeCategories from "@/components/HomeCategories"
import MyLearning from "@/components/MyLearning"

const Page = () => {
    return (
        <section>
            <div>
                <h2 className="p-2 font-bold">Featured Courses</h2>
                <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
                    <FeaturedCourses />
                    <FeaturedCourses />
                    <FeaturedCourses />
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
            <div className="flex flex-col md:flex-row items-center">
                <MyLearning />
            </div>

            <div className="flex justify-center mx-auto mt-8 w-200">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-20 rounded-xl">
                    59$
                </button>

            </div>
        </section>




    );
};

export default Page;
