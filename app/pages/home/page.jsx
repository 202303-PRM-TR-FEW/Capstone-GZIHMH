'use client'
import React,{useState,useEffect} from 'react';
import FeaturedCourses from '@/components/FeaturedCourses';
import HomeCategories from "@/components/HomeCategories"
import MyLearning from "@/components/MyLearning"
import Link from "next/link"
import getCourses from '../api/getCourses';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context/AuthContext';
import { query } from 'firebase/firestore';




const Page = () => {
    const user = useAuthContext();
    const dispatch = useDispatch();
    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState([]);
    const [isloading, setIsloading] = useState(true);
    const router = useRouter()
    const handleCourseClick = (course) => {
        router.push(`../pages/course/${course.id}`
           
        )

       
      };
    useEffect(() => {

        console.log(user)
    const fetchData = async () => {
        const data = await getCourses(user.user.isAnonymous);
        console.log(data)
        setCourses(data);
        setIsloading(false)
      
    };
    
    
    try { fetchData(); }catch{setCourses([])}
    }, []);
    if (isloading) {
     return <p>loading ...</p>
 }
    return (
        <section className='w-full flex flex-col md:pr-12'>
            <div className='w-full flex flex-col md:p-4'> 
                <h1 className="pt-2 p-2 font-bold">Featured Courses</h1>
                <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row  ">
                    
                    {courses
                        .slice(0, 4).map((course) => (
                            <div className='w-full p-2 'key={course.id}>
                                
                                <li  >
                                    <FeaturedCourses
                                        courseId={course.id}
                                    imageSrc={course.thumbnail}
                                    alt={course.title}
                                    title={course.title}
                                    duration={course.totalDuration}
                                    rating={course.rate}
                                    price={course.price}
                                    user_id={course.tutor} // Provide the user ID here
                                    userProfileImage={course.tutor.profilePicture} 
                                        username={course.tutor.name}
                                        user = {user}
                                        />
                                        
                                    </li>
                                    
                            </div>
                                
                    ))}
                    
               
                    
            </div>
            </div>
            <div className='w-full flex flex-col'>
            <h2 className="p-2 font-bold">Categories</h2>

            <div className="flex flex-row ">

                
                <HomeCategories/>

               

              



                </div>

            </div>
            <div className='w-full flex flex-col'>
                <h2 className="p-3 font-bold">My Learning</h2>
                <div className="flex flex-col mb-4 p-2">
                <MyLearning />
                </div>
                <div className="flex justify-center mx-auto mt-8 p-2">
                    <div className='flex justify-center mx-auto p-2'>
                        <Link href='/pages/courses' passHref>
                            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-xl'>
                                SEE ALL
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
            

           
        </section>




    );
};

export default Page;
