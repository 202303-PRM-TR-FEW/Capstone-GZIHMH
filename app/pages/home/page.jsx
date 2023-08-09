'use client'
import React,{useState,useEffect} from 'react';
import FeaturedCourses from '@/components/FeaturedCourses';
import HomeCategories from "@/components/HomeCategories"
import MyLearning from "@/components/MyLearning"
import Link from "next/link"
import getCourses from '../api/getCourses';
import { isAnonymous } from '@/redux/selectors'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { query } from 'firebase/firestore';
const Logo1 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-histogram"
                         width="28" height="28" viewBox="0 0 24 24" stroke="#2E8DFF" fill="none">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M3 3v18h18"/>
                        <path d="M20 18v3"/>
                        <path d="M16 16v5"/>
                        <path d="M12 13v8"/>
                        <path d="M8 16v5"/>
                        <path d="M3 11c6 0 5 -5 9 -5s3 5 9 5"/>
                    </svg>
`;

const Logo2 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users-group"
width="28" height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
<path d="M8 21v-1a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v1"/>
<path d="M15 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
<path d="M17 10h2a2 2 0 0 1 2 2v1"/>
<path d="M5 5a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/>
<path d="M3 13v-1a2 2 0 0 1 2 -2h2"/>
</svg>
`;

const Logo3 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-scribble"
width="28" height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M3 15c2 3 4 4 7 4s7 -3 7 -7s-3 -7 -6 -7s-5 1.5 -5 4s2 5 6 5s8.408 -2.453 10 -5"/>
</svg>
`;

const Logo4 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-database"
                         width="28" height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 6m-8 0a8 3 0 1 0 16 0a8 3 0 1 0 -16 0"/>
                        <path d="M4 6v6a8 3 0 0 0 16 0v-6"/>
                        <path d="M4 12v6a8 3 0 0 0 16 0v-6"/>
                    </svg>
`;

const Logo5 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wand" width="28"
height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M6 21l15 -15l-3 -3l-15 15l3 3"/>
<path d="M15 6l3 3"/>
<path d="M9 3a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
<path d="M19 13a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"/>
</svg>
`;


const Logo6 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bulb" width="28"
height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7"/>
<path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3"/>
<path d="M9.7 17l4.6 0"/>
</svg>
`;


const Logo7 = `
<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sparkles"
width="28" height="28" viewBox="0 0 24 24" stroke="#2F8DFF" fill="none">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path
   d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"/>
</svg>
`;


const Page = () => {

    const [courses, setCourses] = useState([]);
    const [course, setCourse] = useState([]);
    const isanon = useSelector(isAnonymous);
    const router = useRouter()
    const handleCourseClick = (course) => {

        setCourse(course)
        router.push(`../pages/course/${course.id}`
           
        )

       
      };
    useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses(isanon);
      setCourses(data);
      
    };
    
    try { fetchData(); }catch{setCourses([])}
    }, []);
    // useEffect(() => {
    //     dispatch(clearCourse)
    //     dispatch(selectCourse(course))

    //     // console.log("this is what's happening after use effect  ", c)
        
    //   }, []);
    return (
        <section className='w-full flex flex-col md:pr-12'>
            <div className='w-full flex flex-col md:p-4'> 
                <h1 className="pt-2 p-2 font-bold">Featured Courses</h1>
                <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row  ">
                    
                    {courses
                        .slice(0, 4).map((course) => (
                            <div className='w-full p-2 'key={course.id}>
                                {/* <Link  key={course.id} href={{pathname:`../pages/courses/${course.id}`, query:course.id   }}> */}
                                
                                <li  onClick={() => handleCourseClick(course)}>
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
                                    username = {course.tutor.name}
                                        />
                                        
                                    </li>
                                {/* </Link> */}
                                    
                            </div>
                                
                    ))}
                    
               
                    
            </div>
            </div>
            {/* <div className='w-full flex flex-col'>
            <h2 className="pl-2 font-bold">Categories</h2>
            <div className="flex flex-row ">
                <HomeCategories 
                
                title="Sales"
                imageSrc={Logo1}
                
                />

                <HomeCategories 
                    
                    title="HR"
                    imageSrc={Logo2}
                    
                    />

                <HomeCategories 
                    
                    title="drawing"
                    imageSrc={Logo3}
                    
                    />

                <HomeCategories 
                    
                    title="BigData"
                    imageSrc={Logo4}
                    

                    />


                <HomeCategories 
                    
                    title="Design"
                    imageSrc={Logo5}
                    
                    />


                <HomeCategories 
                    
                    title="Marketing"
                    imageSrc={Logo6}
                    
                    />


                <HomeCategories 
                    
                    title="Astronomy"
                    imageSrc={Logo7}
                    
                    />



                </div>

            </div> */}
            <div className='w-full flex flex-col'>
                <h2 className="p-2 font-bold">My Learning</h2>
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
