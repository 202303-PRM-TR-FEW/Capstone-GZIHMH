import React from 'react';
import FeaturedCourses from '@/components/FeaturedCourses';
import HomeCategories from "@/components/HomeCategories"
import MyLearning from "@/components/MyLearning"

const Page = () => {
    return (
        <section>
            <div>
                <h2 className="pt-4 pl-2 font-bold">Featured Courses</h2>
                <div className="pl-2 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <FeaturedCourses />
                    <FeaturedCourses />
                    <FeaturedCourses />
                    <FeaturedCourses />
                </div>

            </div>
            <h2 className="pl-2 font-bold">Categories</h2>
            <div className="flex-row">
                <HomeCategories />
            </div>
            <div>
                <h2 className="p-2 font-bold">My Learning</h2>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <MyLearning />
            </div>

            <div className="flex justify-center mx-auto mt-8 p-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-xl">
                    SEE ALL
                </button>

            </div>
        </section>




    );
};

export default Page;
