'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Details from './Details';
import db from '../utils/db';

function ListElement() {
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);
  
  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const getPersonName = (userId) => {
    const person = db.person.find((p) => p.id === userId);
    return person ? person.name : '';
  };

  return (
    <div className='flex flex row flex-1'>
       <div className='rounded-2xl p-2 '>
       <p className="flex flex-row justify-between p-5">
         <h1>My Learning</h1>
         <p className='flex flex-row justify-between'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 self-start text-gray-500 hover:text-gray-600 fill-current m-2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg><span className='w-430 h-42 flex-grow-1 m-0 overflow-hidden text-lg leading-10 text-left tracking-normal whitespace-pre-line opacity-90 visible text-gray-600 font-rubik'>Statistics</span> </p>
        </p>
      {db.courses.map((course) => (
        <div className='course_card' key={course.id} onClick={() => handleCourseClick(course.id)}>
          <div className='flex flex-row justify-between '>
          <Image src={course.image}  width={200} height={200} alt={course.title} className='image' style={{ cursor: 'pointer' }} />
         </div>
          <div className='ml-3'>
          <h2>{course.title}</h2>
          <p className='mb-3'>{getPersonName(course.userId)}</p>
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
      {selectedCourseIndex !== null && (
        <Details courseIndex={selectedCourseIndex} />
      )}
      </div>
    </div>
  );
}

export default ListElement;