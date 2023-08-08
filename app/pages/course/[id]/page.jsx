'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import { selectedCourse } from '@/redux/selectors'
import FeaturedCourses from '@/components/FeaturedCourses';
import {getLessons} from '../../api/getLessons';
import { getCourse } from '../../api/getCourse';
import getCourses from '../../api/getCourses';
import Recommended from '@/components/Recommended';
import { useSearchParams } from "next/navigation";
import CoursesDetails from '../../courseDetail/page';
const page = ({params}) => {
  // const router = useRouter()
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [course, setCourse] = useState([]);
  const [lessons,setlessons] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourse(true, id);
      const lessons = await getLessons(true,id)
      setCourse(data);
      console.log("the id sent to course id is :",id)
      
    };
    
    try { fetchData(); }catch{setCourse([])}
  }, []);

  return (
    <div>
      <h1>this is the page</h1>
      {/* <h1>{id}</h1> */}
      <CoursesDetails/>
      {/* <p className='text-black'>{lessons}</p> */}

      
    </div>

  )

  

}

// export  function getServerSideProps({ query }) {
//   const id  = query;
//   // const course =  getCourses(true)
//   // const lessons = "this is lessons" 
//   console.log("this is spartaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
//   // console.log("course is : ",course)
//   const course ="test "

//   return {
//     props: {
//       id,
//        course
//     },
//   };
// }
export default page
