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
import Details from '@/components/Details';
const page = ({params}) => {
  // const router = useRouter()
  const id = params.id
  const [course, setCourse] = useState([]);
  const [lessons,setlessons] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourse(true, id);
      const lessonsData = await getLessons(true,id)
      setCourse(data);
      setlessons(lessonsData);
      // console.log("the id sent to course id is :", id)
      console.log("this is the fucking course : ",data)
      // console.log("these are the fucking lessons:", lessons)
      
    };
    
    try { fetchData(); }catch{setCourse([])}
  }, []);

  return (
    <div>
      <h1>this is the page</h1>
      {/* <h1>{id}</h1> */}
      <Details course={course} />
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
