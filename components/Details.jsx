import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import db from '../utils/db';
import icons from '../utils/icons';
import UserImage from './UserImage'

const Details = ({ courseIndex = 0 }) => {
  const getCourse = (courseIndex) => {
    const course = db.courses.find((c) => c.id === courseIndex);
    return course || {};
  };
  if (!courseIndex) {
    courseIndex = db.courses[0].id;
  }

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };

  const course = getCourse(courseIndex);
  const user = course ? getPersonName(course.user_id) : '';

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <section className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <Image src={course.image} width={600} height={400} alt={course.title} className='max-w-[600px] max-h-[400px]' />
        <div className='flex justify-start flex-col ml-4 '>
          <h2 className='p-2 mb-2 mt-2'>{course.title}</h2>
          <UserImage/>
          <div className='flex flex-row mt-2'>
            {icons.map(icon => icon.name === 'course_duration' && (<div key={icon.id} className="text-gray-400 w-6 h-6 mr-2" dangerouslySetInnerHTML={{ __html: icon.svg }} />))}
            <p>{course.duration} m</p>
          </div>
          <div className='flex flex-row mb-4 mt-4'>
            {icons.map(icon => icon.name === 'course_rating' && (<div key={icon.id} className="text-gray-400 w-6 h-6 mr-2" dangerouslySetInnerHTML={{ __html: icon.svg }} />))}
            <p>{course.rating} </p>
          </div>
          <h3 className='mb-3'>Course Description</h3>
          <p>{course.description}</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-evenly mt-10  lg:mt-10 md:mt-5 sm:mt-1'>
          <button className="text-primary m-3 text-1xl font-bold bg-transparent border border-primary w-80 h-11 rounded-2xl hover:text-white hover:bg-primary">REVIEW COURSE</button>
          <button className="text-primary m-3 text-1xl font-bold bg-transparent border border-primary w-80 h-11 rounded-2xl hover:text-white hover:bg-primary">
            <Link href={`/CourseOverview/${courseIndex}`}>
              CONTINUE LEARNING
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Details;