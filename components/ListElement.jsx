

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
    <div className='flex flex-row'>
       <div>
      {db.courses.map((course, index) => (
        <div key={course.id} onClick={() => handleCourseClick(course.id)}>
          <Image src={course.image} width={200} height={200} alt={course.title} className='image' style={{ cursor: 'pointer' }} />
          <div className='flex flex-row justify-between'>
            <h2>{course.title}</h2>
            <button>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start text-gray-500 hover:text-blue-400 fill-current m-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </span>
            </button>
          </div>
          <p>User: {getPersonName(course.userId)}</p>
          <input
            type="range"
            value={parseInt(course.completion_ratio)}
            className="w-full h-full opacity-100 bg-white rounded-full mt-5"
          />
          <p>Completion Ratio: {course.completion_ratio}</p>
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