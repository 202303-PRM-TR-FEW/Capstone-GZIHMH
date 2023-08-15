'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Details from './Details';
import db from '../utils/db';
import { Statistics} from '../utils/icons';
import SaveButton from './SaveButton';
import NoCourseMessage from './NoCourseMessage';

function ListElement({courses, user}) {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [randomCourses, setRandomCourses] = useState([]);

  useEffect(() => {
    if (courses && courses.length > 0) {
      setRandomCourses(courses);
    }
  }, [courses]);

  const isCourseSaved = (courseExists) => {
    return courseExists ? 'text-primary' : 'text-gray-400';
  };

  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };

  const handleToggle = (courseId) => {
    // const course = db.courses.find((course) => course.id === courseId);
    // if (course) {
    //   if (course.saved) {
    //     if (courseExists) {
    //     }
    //     course.saved = false;
    //   } else {
    //     course.saved = true;
    //   }
    // }
    // setRandomCourses([...db.courses]);
  };

  return (
    <div className='flex flex-col lg:flex-row w-full  '>
      <div className='flex flex-col  w-full '>
          <div className="flex flex-row justify-between ">
            <h1 className='x-3 py-2'>My Learning</h1>
            <div className='flex flex-row justify-between px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-gray-700'>
              <a className="flex text-lg items-center" href="/pages/statistics">
                <Statistics/>
                <span className='px-3 py-2'>Statistics</span>
            </a>
              
            </div>
          </div>
          {randomCourses.length > 0 ? (
          <div className='flex flex-col w-full lg:max-h-[800px] overflow-y-auto'>
          {randomCourses.map((course, index) => (
          <div className='p-2' key={course.id}>
              
              <div
                className={`flex relative flex-row rounded-2xl w-full bg-white ${
                  selectedCourseIndex === index ? 'border-primary bg-blue-200' : 'hover:bg-blue-200'
                } bg-opacity-30 rounded-5 border hover:border-primary p-2 `}
                
                onClick={() => handleCourseClick(course)}
              >

                <div className='flex flex-row  p-2 '>
                  <Image
                    src={course.thumbnail}
                    width={190}
                    height={152}
                    alt={course.title}
                    style={{ cursor: 'pointer' }}
                  />
                </div>
                <div className='w-full p-2'>
                  <div className='flex '>
                    <h2>{course.title}</h2>
                  </div>
                  <p className='tutor_name mb-3'>{course.tutor.name}</p>
                  <div className="bg-gray-200 h-2 w-full rounded-xl overflow-hidden mx-2 my-1.5">
                    <div className="h-full bg-primary rounded-lg" style={{ width: '30%' }}></div>
                  </div>
                  <p className='text'>30% complete</p>
                </div>
            <SaveButton user={user} isSaved={course.isSaved} courseId={course.id}/>

            </div>
            </div> 
            ))}
          
          
          </div>
          ) : (<NoCourseMessage />
          )}
        
      </div>
      
      {selectedCourseIndex != null && (
        <div className='w-full h-full bg-white p-2'>
          <Details course={selectedCourseIndex} /> 
        </div>
          
          )}
    </div>
  );
}

export default ListElement;
