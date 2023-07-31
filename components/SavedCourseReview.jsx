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

  const image = '/assets/images/profilePic5.jpeg';

  return (
    <section className='bg-white flex flex-col rounded-2xl'>
      <div className='flex flex-col items-centergit'>
        <Image src={course.image} width={600} height={400} alt={course.title} className='max-w-[600px] max-h-[400px]' />
        <div className='flex justify-start flex-col ml-4 '>
          <h2 className='py-1.5 mb-1 mt-1'>{course.title}</h2>
          <div className='user-container w-1/4 mb-2 rounded-full flex  items-center bg-white h-[35px]'>
             <Image src={image} alt="User Profile " width={35} height={35} className='w-[35px] h-[35px] m-0 rounded-full' />
             <p className='text pl-2 w-full'>{user}</p></div>
          <div className='flex flex-row text'>
            {icons.map(icon => icon.id === 2 && (<div key={icon.id} className="text-gray-400 w-5 h-5 mr-2" dangerouslySetInnerHTML={{ __html: icon.svg }} />))}
            <p>{course.duration} m</p>
          </div>
          <div className='flex flex-row text'>
            {icons.map(icon => icon.id === 3 && (<div key={icon.id} className="text-gray-400 w-5 h-5 mr-2" dangerouslySetInnerHTML={{ __html: icon.svg }} />))}
            <p>{course.rating} </p>
          </div>
          <h3 className='mt-3 mb-1 text'>Course description</h3>
          <p className='md-w-1/2 text sm-w-1/2'>{course.description}</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-evenly mt-5  lg:mt-5 md:mt-3 sm:mt-1'>
          <button className="text-primary m-3 font-bold bg-transparent border border-primary w-2/5 h-9 rounded-2xl hover:text-white hover:bg-primary">REVIEW </button>
          <button className="text-primary m-3 font-bold bg-transparent border border-primary w-2/5 h-9 rounded-2xl hover:text-white hover:bg-primary">
            BUY NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default SavedCourseReview;
