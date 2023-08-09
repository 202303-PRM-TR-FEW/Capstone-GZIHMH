'use client'
import { React, useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import { selectedCourse } from '@/redux/selectors'
import FeaturedCourses from '@/components/FeaturedCourses';
import {getLessons} from '../../api/getLessons';
import { getCourse } from '../../api/getCourse';
import Details from '@/components/Details';

const Course = ({ params }) => {
  const id = params.id
  const [course, setCourse] = useState([]);
  const [lessons, setlessons] = useState([])
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourse(true, id);
      const lessonsData = await getLessons(true, id)
      setCourse(data);
      setlessons(lessonsData);
      setIsloading(false)
      // console.log("the id sent to course id is :", id)
      console.log("this is the fucking course : ", data)
      // console.log("these are the fucking lessons:", lessons)
      
    };
    
    try { fetchData(); } catch { setCourse([]) }
  }, []);
  if (isloading) {
    return <p>loading</p>
    
  }
  return (
    <div>
      <h1>this is the page</h1>
      {/* <h1>{id}</h1> */}
      <Details course={course} />
      {/* <p className='text-black'>{lessons}</p> */}

      
    </div>

  )
}
export default Course
