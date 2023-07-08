
import React from 'react';
import Image from 'next/image';
import db from '../utils/db';

function SavedCourses({ savedCourses }) {

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };
  return (
    <div className='text-black w-1/2'>
      <h1>Saved Courses</h1>
      {savedCourses.map((course) => (
         <><div className='flex flex-row justify-between aspect-w-1 aspect-h-1'>
          <Image src={course.image} width={100} height={100} alt={course.title} className='image object-cover' style={{ cursor: 'pointer' }} />
        </div><div key={course.id}>
            <h2>{course.title}</h2>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start text-primary fill-current m-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                 </svg></span>
           
            <p className='mb-3'>{getPersonName(course.user_id)}</p>
            <button className='text-white bg-primary w-12 h-6 text-sm font-semibold rounded-2xl '>BUY</button>
           
          </div></>
      ))}
    </div>
  );
}

export default SavedCourses;


