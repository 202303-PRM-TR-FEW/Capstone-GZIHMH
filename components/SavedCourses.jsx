'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import db from '../utils/db';
import SavedCourseReview from './SavedCourseReview';
import { useSelector } from 'react-redux';
import { selectSavedCourses } from '@/redux/selectors';
function SavedCourses() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const savedCourses = useSelector(selectSavedCourses);
  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };

  return (

    <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col h-full w-full'>
      <div className='w-full'>
        <h1 className='w-full px-4 py-1'>Saved Courses</h1>
        <div className='lg:max-h-[800px] h-full overflow-y-auto'>
          {savedCourses.map((course, index) => (
            <div className='flex rounded-2xl opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-primary' key={course.id}>
              <div className='flex flex-row w-full'>

                <Image
                  src={course.image}
                  width={180}
                  height={148}
                  alt={course.title}
                  className='max-w-[180px] max-h-[148px]'
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleCourseClick(index)}
                />
              </div>

              <div className='w-full'>
                <div className='flex justify-between pt-2 '>

                  <h2>{course.title}</h2>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}

                      className='w-5 h-5 text-primary fill-current'

                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                      />
                    </svg>
                  </span>
                </div>
                <p className='tutor_name'>{getPersonName(course.user_id)}</p>
                <button className='text-white bg-primary w-12 h-6 text-sm font-semibold rounded-2xl mt-4'>BUY</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-full bg-white'>
        {selectedCourseIndex !== null && (
          <SavedCourseReview course={savedCourses[selectedCourseIndex]} />
        )}
      </div>
    </div>
  );
}

export default SavedCourses;
