'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import db from '../utils/db';
import SavedCourseReview from './SavedCourseReview';

function SavedCourses({ savedCourses }) {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };

  return (
    <div className='flex'>
      <div className='mt-10 p-10'>
        <h1 className='p-4'>Saved Courses</h1>
        {savedCourses.map((course, index) => (
<<<<<<< HEAD
          <div className='flex rounded-2xl w-[670px] h-[175px] m-3  opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-primary' key={course.id}>
=======
          <div className='flex rounded-2xl h-275 w-[500px] m-3  opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-primary' key={course.id}>
>>>>>>> 9e1e29f812f19bc6a045aef04d57cb22c638dfc2
            <div className='flex flex-row'>
              <Image
                src={course.image}
                width={200}
                height={180}
                alt={course.title}
                className='max-w-[200px] max-h-[180px]'
                style={{ cursor: 'pointer' }}
                onClick={() => handleCourseClick(index)}
              />
            </div>
            <div className='ml-4 p-4 w-[510px]'>
              <div className='flex flex-row justify-between mt-4 '>
                <h2>{course.title}</h2>
                <span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6 self-start text-primary fill-current m-2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                    />
                  </svg>
                </span>
              </div>
              <p className='mb-3 tutor_name'>{getPersonName(course.user_id)}</p>
              <button className='text-white bg-primary w-12 h-6 text-sm font-semibold rounded-2xl mt-4'>BUY</button>
            </div>
          </div>
        ))}


      </div>
<<<<<<< HEAD
      <div className='w-[840px] h-full bg-white p-20'>
=======
      <div className='w-[650px] h-full bg-white p-20'>
>>>>>>> 9e1e29f812f19bc6a045aef04d57cb22c638dfc2
        {selectedCourseIndex !== null && (
          <SavedCourseReview course={savedCourses[selectedCourseIndex]} />
        )}
      </div>
    </div>

  );
}

export default SavedCourses;
