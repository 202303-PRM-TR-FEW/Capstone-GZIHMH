'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Details from './Details';
import db from '../utils/db';

function ListElement() {
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

  const handleToggle = (user_id) => {
    const updatedDb = { ...db };
    const courses = updatedDb.courses.map((course) => {
      if (course.id === user_id) {
        return {
          ...course,
          saved: !course.saved,
        };
      }
      return course;
    });
    updatedDb.courses = courses;
    setRandomCourses(courses);
  };


  return (
<div className='flex flex-row mt-10'>
      <div className='rounded-2xl p-2 flex flex-col w-1/2'>
        <div className="flex flex-row justify-evenly">
          <h1>My Learning</h1>
          <div className='flex flex-row justify-between  px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-gray-700'>
            <a className="flex text-lg items-center" href="/pages/statistics">
              <svg xmlns="http://www.w3.org/2000/svg" className="mr-4" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 3v18h18" /><path d="M20 18v3" /><path d="M16 16v5" /><path d="M12 13v8" /><path d="M8 16v5" /><path d="M3 11c6 0 5 -5 9 -5s3 5 9 5" /></svg>
              <span>Statistics</span>
            </a>
          </div>
        </div>
        {randomCourses.map((course) => (
          <div className='flex h-275 m-1 w-[670px] h-[175px] rounded-2xl opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 border hover:border-primary' key={course.id} onClick={() => handleCourseClick(course.id)}>
            <div className='flex flex-row justify-between '>
              <Image src={course.image} width={200} height={180} alt={course.title} className='max-w-[200px] max-h-[180px]' style={{ cursor: 'pointer' }} />
            </div>
            <div className='ml-3 p-4 w-[510px]'>
              <div className='flex justify-between'>
                <h2>{course.title}</h2>
                <button onClick={() => handleToggle(course.id)}>
                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 self-start ${course.saved ? 'text-primary' : 'text-gray-400'} fill-current m-2`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg></span></button>
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
      <div className='w-[840px] h-full bg-white p-20'>
        {selectedCourseIndex !== null && (
          <Details courseIndex={selectedCourseIndex} />
        )}
      </div>

    </div>
  );
}

export default ListElement;