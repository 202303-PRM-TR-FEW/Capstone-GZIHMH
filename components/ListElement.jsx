'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Details from './Details';
import db from '../utils/db';

function ListElement() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  const [randomCourses, setRandomCourses] = useState([]);
  const [savedCourses, setSavedCourses] = useState([]);

  

  

  useEffect(() => {
    const getRandomCourses = () => {
      const shuffledCourses = db.courses.sort(() => 0.5 - Math.random());
      const selectedCourses = shuffledCourses.slice(0, 4);
      setRandomCourses(selectedCourses);
    };

    getRandomCourses();
  }, []);


  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };

const handleToggle = (courseId) => {
  const updatedDb = { ...db }; // Create a copy of the db object
  const courses = updatedDb.courses.map((course) => {
    if (course.id === courseId) {
      return {
        ...course,
        saved: !course.saved,
      };
    }
    return course;
  });
  updatedDb.courses = courses;
  setRandomCourses(courses); // Update the state with the updated courses
};


  return (
    <div className='flex flex-row flex-1'>
      <div className='rounded-2xl p-2'>
        <p className="flex flex-row justify-between p-5">
          <h1>My Learning</h1>
          <p className='flex flex-row justify-between'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 self-start text-gray-500 hover:text-gray-600 fill-current m-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
            <span className='w-430 h-42 flex-grow-1 m-0 overflow-hidden text-lg leading-10 text-left tracking-normal whitespace-pre-line opacity-90 visible text-gray-600 font-rubik'>Statistics</span>
          </p>
        </p>
        {randomCourses.map((course) => (
          <div className='flex flex-row rounded-2xl justify-evenly m-5 items-center aspect-w-1 aspect-h-1 flex-1  w-576 h-70 opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-blue-500' key={course.id} onClick={() => handleCourseClick(course.id)}>
            <div className='flex flex-row justify-between aspect-w-1 aspect-h-1'>
              <Image src={course.image} width={100} height={100} alt={course.title} className='image object-cover' style={{ cursor: 'pointer' }} />
            </div>
            <div className='ml-3'>
              <h2>{course.title}</h2>
              <button onClick={() => handleToggle(course.id)}>
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={`w-6 h-6 self-start ${
        course.saved ? 'text-primary' : 'text-gray-500'
      } fill-current m-2`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  </span>
  {course.saved ? 'Unsave' : 'Save'}
</button>
              
              <p className='mb-3'>{getPersonName(course.user_id)}</p>

    <div className='flex flex row flex-1'>
      <div className='rounded-2xl p-2 '>
        <p className="flex flex-row justify-between p-5">
          <h1>My Learning</h1>
          <p className='flex flex-row justify-between'><svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 self-start text-gray-500 hover:text-gray-600 fill-current m-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg><span className='w-430 h-42 flex-grow-1 m-0 overflow-hidden text-lg leading-10 text-left tracking-normal whitespace-pre-line opacity-90 visible text-gray-600 font-rubik'>Statistics</span> </p>
        </p>
        {db.courses.map((course) => (
          <div className='course_card' key={course.id} onClick={() => handleCourseClick(course.id)}>
            <div className='flex flex-row justify-between '>
              <Image src={course.image} width={200} height={200} alt={course.title} className='image' style={{ cursor: 'pointer' }} />
            </div>
            <div className='ml-3'>
              <h2>{course.title}</h2>
              <p className='mb-3'>{getPersonName(course.user_id)}</p>

              <input
                type="range"
                value={parseInt(course.completion_ratio)}
                className="w-full  opacity-100 bg-white rounded-full "
              />
              <p> {course.completion_ratio} complete</p>
            </div>
            


          </div>
        ))}
      </div>
      <div>
        {selectedCourseIndex !== null && 
          <Details courseIndex={selectedCourseIndex} />
        }
      </div>
      
    </div>
  
}

export default ListElement;
