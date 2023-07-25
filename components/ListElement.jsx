'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Details from './Details';
import db from '../utils/db';
import icons from '../utils/icons';

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
    <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col ml-5 lg:ml-5 md:ml-2 sm:ml-1'>
      <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col ml-5 lg:ml-5 md:ml-3 sm:ml-1'>
        <div className='rounded-2xl p-2 flex flex-col w-1/2'>
          <div className="flex flex-row justify-between items-center my-3">
            <h1 className='ml-3'>My Learning</h1>
            <div className='flex flex-row justify-between text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-gray-700'>
              <a className="flex text-lg" href="/pages/statistics">
                {icons.map(icon => icon.name === 'statistics' && (<div key={icon.id} dangerouslySetInnerHTML={{ __html: icon.svg }} />))}
                <span className='mx-3'>Statistics</span>
              </a>
            </div>
          </div>
          {randomCourses.map((course) => (
            <div className='flex m-1 w-[570px] h-[153px] rounded-2xl opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 border hover:border-primary' key={course.id} onClick={() => handleCourseClick(course.id)}>
              <div className='flex flex-row justify-between '>
                <Image src={course.image} width={185} height={152} alt={course.title} className='max-w-[185px] max-h-[152px]' style={{ cursor: 'pointer' }} />
              </div>
              <div className='ml-3 p-4 w-[510px]'>
                <div className='flex justify-between'>
                  <h2>{course.title}</h2>
                  <button onClick={() => handleToggle(course.id)}>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 self-start ${course.saved ? 'text-primary' : 'text-gray-400'} fill-current m-2`}><path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" /></svg>
                    </span></button>
                </div>
                <p className='tutor_name my-3'>{getPersonName(course.user_id)}</p>
                <div className="bg-gray-200 h-2 w-auto rounded-xl overflow-hidden mx-2 my-1.5">
                  <div className="h-full bg-primary rounded-lg" style={{ width: `${parseInt(course.completion_ratio)}%` }}></div>
                </div>
                <p> {course.completion_ratio} complete</p>
              </div>

            </div>
          ))}
        </div>
        <div className='w-[650px] h-full bg-white p-5 lg-p-5 md-p-3 sm-p-1'>
          {selectedCourseIndex !== null && (
            <Details courseIndex={selectedCourseIndex} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ListElement;