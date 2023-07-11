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
    <div className='flex '>
    <div className='text-black w-1/2 mt-20'>
      <h1>Saved Courses</h1>
      {savedCourses.map((course, index) => (
        <div className='flex flex-row rounded-2xl justify-evenly m-2 items-center aspect-w-1 aspect-h-1 flex-1  w-576 h-70 opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-blue-500' key={course.id}>
          <div className='flex flex-row justify-between aspect-w-1 aspect-h-1'>
            <Image
              src={course.image}
              width={200}
              height={180}
              alt={course.title}
              className='image object-cover'
              style={{ cursor: 'pointer' }}
              onClick={() => handleCourseClick(index)}
            />
          </div>
          <div>
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
            <p className='mb-3 tutor_name'>{getPersonName(course.user_id)}</p>
            <button className='text-white bg-primary w-12 h-6 text-sm font-semibold rounded-2xl mt-4'>BUY</button>
          </div>
        </div>
      ))}

     
    </div>
    <div>
    {selectedCourseIndex !== null && (
        <SavedCourseReview course={savedCourses[selectedCourseIndex]} />
      )}
    </div>
    </div>

  );
}

export default SavedCourses;
