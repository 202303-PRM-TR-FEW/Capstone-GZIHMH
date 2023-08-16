'use client'
import { React, useEffect ,useState} from 'react';
import { useSelector } from 'react-redux';
import { selectedCourse } from '@/redux/selectors'
import FeaturedCourses from '@/components/FeaturedCourses';
import {getLessons} from '../../api/getLessons';
import { getCourse } from '../../api/getCourse';
import Details from '@/components/Details';
import { useAuthContext } from '@/context/AuthContext';
import CourseOverview from '@/components/CourseOverview';
const Page = ({ params }) => {
  const user = useAuthContext()
  const id = params.id
  const [course, setCourse] = useState([]);
  const [lessons, setlessons] = useState([])
  const [isloading,setIsloading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourse(user, id);
      const lessonsData = await getLessons(user, id)
      setCourse(data);
      setlessons(lessonsData);
      console.log("lessons data in course/id",lessonsData)
      setIsloading(false)
      
    };
    
    try { fetchData(); } catch { setCourse([]) }
  }, [user]);
  if (isloading) {
  return<p>loading ...</p>
}
  return (
    
      <CourseOverview lessons={lessons} course={course}/>


  )
}
export default Page
