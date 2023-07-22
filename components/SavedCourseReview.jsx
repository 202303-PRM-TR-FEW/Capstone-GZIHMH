import React from 'react';
import Image from 'next/image';
import db from '../utils/db';


const SavedCourseReview = ({ course }) => {
  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };

  const user = getPersonName(course.user_id);

  return (
    <section className='bg-white flex flex-col rounded-2xl'>
      <div className='flex flex-col items-center p-10 lg-p-10 md-p-5 sm-p-1'>
        <Image src={course.image} width={600} height={400} alt={course.title} className='max-w-[600px] max-h-[400px]' />
        <div className='flex justify-start flex-col ml-4 '>
          <h2 className='p-3 mb-4 mt-4'>{course.title}</h2>
          <div className='flex flex-row'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 mr-2 h-6 text-gray-400   fill-current  ">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4v4l4 2-4 2-4-2V6h4z" />
            </svg>
            <p>{course.duration}</p>
          </div>
          <div className='flex flex-row mb-4 mt-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-gray-400  fill-current ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>
            <p>{course.rating} </p>
          </div>
          <h3 className='mb-3'>Course description</h3>
          <p className='md-w-1/2 sm-w-1/2'>{course.description}</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-evenly mt-10  lg:mt-10 md:mt-5 sm:mt-1'>
          <button className="text-primary m-3 text-1xl font-bold bg-transparent border border-primary w-80 h-11 rounded-2xl hover:text-white hover:bg-primary">REVIEW </button>
          <button className="text-primary m-3 text-1xl font-bold bg-transparent border border-primary w-80 h-11 rounded-2xl hover:text-white hover:bg-primary">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default SavedCourseReview;