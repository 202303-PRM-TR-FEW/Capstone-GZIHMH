import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import db from '../utils/db';
import icons from '../utils/icons';

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

  const image = '/assets/images/profilePic5.jpeg';

  return (
    <section className='flex flex-col'>
      <div className='flex flex-col items-center'>
        <Image src={course.image} width={600} height={400} alt={course.title} className='max-w-[600px] max-h-[400px]' />
        <div className='flex justify-start flex-col ml-4 '>
          <h2 className='p-1 mb-1 mt-1'>{course.title}</h2>
          <div className='user-container w-1/4 mb-2 rounded-full flex  items-center bg-white h-[35px]'>
             <Image src={image} alt="User Profile " width={35} height={35} className='w-[30px] h-[35px] rounded-full' />
             <p className='text'>{user}</p>
          </div>
          <div className='flex flex-row text'>
            <div className="text-gray-400 w-5 h-5 mr-2" dangerouslySetInnerHTML={{ __html: icons.find(icon => icon.id === 2).svg }} />
            <p>{course.duration} m</p>
          </div>
          <div className='flex flex-row text'>
            <div className="text-gray-400 w-5 h-5 mr-2" dangerouslySetInnerHTML={{ __html: icons.find(icon => icon.id === 3).svg }} />
            <p>{course.rating}</p>
          </div>
          <h3 className='mt-3 text mb-1'>Course Description</h3>
          <p className='text'>{course.description}</p>
        </div>
      </div>
      <div>
        <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col items-center justify-evenly mt-5  lg:mt-5 md:mt-3 sm:mt-1'>
          <button className="text-primary m-3 font-bold bg-transparent border border-primary w-2/5 h-9 rounded-2xl hover:text-white hover:bg-primary">REVIEW COURSE</button>
          <button className="text-primary m-3 font-bold bg-transparent border border-primary w-2/5 h-9 rounded-2xl hover:text-white hover:bg-primary">
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
