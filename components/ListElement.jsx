'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Details from './Details';
import db from '../utils/db';
import icons from '../utils/icons';
import { useDispatch, useSelector } from 'react-redux';
import { saveCourse, removeCourse } from '@/redux/actions';
import { selectSavedCourses } from '@/redux/selectors';
function ListElement() {

  const dispatch = useDispatch();  
  const savedCourses = useSelector(selectSavedCourses);  
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [randomCourses, setRandomCourses] = useState([]);

  useEffect(() => {
    const getRandomCourses = () => {
      const shuffledCourses = [...db.courses].sort(() => 0.5 - Math.random());
      const selectedCourses = shuffledCourses.slice(0, 4);
      setRandomCourses(selectedCourses);
    };

    getRandomCourses();
  }, []);

  useEffect(() => {
    if (randomCourses.length > 0) {
      setSelectedCourseIndex(randomCourses[0].id);
    }
  }, [randomCourses]);

  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };

  const handleToggle = (courseId) => {
    const course = db.courses.find((course) => course.id === courseId);
    if (course) {
      //if the course is saved check if the value exist in the store if it is then remove the value//
      if (course.saved == true) {
        const courseExists = savedCourses.some((course) => course.id === courseId);
         if(courseExists){
          dispatch(removeCourse(courseId));
         }
         course.saved = false;
      } else {
        //if the course wasn't saved then use the action save course to add it to the store//
        course.saved = true;
          dispatch(saveCourse(course));
        };
    }
    console.log(savedCourses)
    setRandomCourses(db.courses);
  }

  return (
    <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col ml-5 lg:ml-5 md:ml-3 sm:ml-1'>
     <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col ml-5 lg:ml-5 md:ml-3 sm:ml-1'>
      <div className='rounded-2xl p-2 flex flex-col'>
        <div className="flex flex-row justify-between items-center ">
          <h1>My Learning</h1>
          <div className='flex flex-row justify-between  px-2 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-gray-700'>
            <a className="flex text-lg" href="/pages/statistics">
              {icons.map(icon => icon.name === 'statistics' && (<div key={icon.id} dangerouslySetInnerHTML={{ __html: icon.svg }} />))}
              <span className='px-3'>Statistics</span>
            </a>
          </div>
        </div>
        <div className='flex-1 max-h-[665px] overflow-y-auto'>
        {randomCourses.map((course) => (
          <div className=' flex m-1 w-[570px] h-[156px] rounded-2xl opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 border hover:border-primary' key={course.id} onClick={() => handleCourseClick(course.id)}>
            <div className='flex flex-row justify-between '>
              <Image src={course.image} width={182} height={162} alt={course.title} className='max-w-[182px] max-h-[162px]' style={{ cursor: 'pointer' }} />
            </div>
            <div className='ml-3 p-4 w-[510px]'>
              <div className='flex justify-between'>
                <h2>{course.title}</h2>
                <button onClick={() => handleToggle(course.id)}>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 self-start ${course.saved ? 'text-primary' : 'text-gray-400'} fill-current m-2`}><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>
                  </span></button>
              </div>
              <p className='tutor_name mb-3'>{getPersonName(course.user_id)}</p>
              <input
                type="range"
                defaultValue={parseInt(course.completion_ratio)}
                className="w-full h-[13px]  opacity-100 bg-white rounded-full"
              />
              <p> {course.completion_ratio} complete</p>
            </div>

          </div>
        ))}
        </div>
      </div>
      <div className='w-[650px] h-full bg-white p-5 lg-p-5 md-p-2 sm-p-1'>
        {selectedCourseIndex !== null && (
          <Details courseIndex={selectedCourseIndex} />
        )}
      </div>
</div>
    </div>
  );
}

export default ListElement;
