import React from 'react';
import Image from 'next/image';
import db from '../utils/db';
import icons from '../utils/icons';


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
            {icons.map(icon => icon.name === 'course_duration' && (<div key={icon.id} className="text-gray-400 w-6 h-6 mr-2" dangerouslySetInnerHTML={{ __html: icon.svg }} />))}
            <p>{course.duration} m</p>
          </div>
          <div className='flex flex-row mb-4 mt-4'>
            {icons.map(icon => icon.name === 'course_rating' && (<div key={icon.id} className="text-gray-400 w-6 h-6 mr-2" dangerouslySetInnerHTML={{ __html: icon.svg }} />))}
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