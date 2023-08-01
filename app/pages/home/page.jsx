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
                <FeaturedCourses
        imageSrc="/assets/images/background1.jpeg"
        alt="Featured Courses Image"
        title="Power BI"
        duration="1h 53m"
        rating="4.9/5"
        price="$24"
        user_id={1} // Provide the user ID here
        userProfileImage="/assets/images/profilePic1.jpeg" 
      />
            <FeaturedCourses
        imageSrc="/assets/images/background2.jpeg"
        alt="Agile Project Management"
        title="Agile Project Management"
        duration="59m"
        rating="4.3/5"
        price="$18"
        user_id={2} // Provide the user ID here
        userProfileImage="/assets/images/profilePic2.jpeg" 
      />
     <FeaturedCourses
        imageSrc="/assets/images/background3.jpeg"
        alt="Pivot Tables"
        title="Pivot Tables"
        duration="1h 23m"
        rating="4.6/5"
        price="$24"
        user_id={3} // Provide the user ID here
        userProfileImage="/assets/images/profilePic3.jpeg" 
      />
       <FeaturedCourses
        imageSrc="/assets/images/background4.jpeg"
        alt="Power BI"
        title="Power BI"
        duration="1h 17m"
        rating="4.1/5"
        price="$24"
        user_id={4} // Provide the user ID here
        userProfileImage="/assets/images/profilePic4.jpg" 
      />
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
