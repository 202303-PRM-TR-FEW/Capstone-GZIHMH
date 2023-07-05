import db from '../utils/db';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CourseDetails = ({ courseIndex }) => {
  const getCourse = (courseIndex) => {
    const course = db.courses.find((c) => c.id === courseIndex);
    return course;
  };

  const getPersonName = (userId) => {
    const person = db.person.find((p) => p.id === userId);
    return person ? person.name : '';
  };
  
  const course = getCourse(courseIndex);
  const user = getPersonName(course.userId)

  return (
    <section>
      <div>
        <Image src={course.image} width={420} height={250} alt={course.title} className='image' />
        <h2>{course.title}</h2>
        <p>User: {user}</p>
        <p>Created: {course.Created}</p>
        <p>Rating: {course.Rating} </p>
        <h3>{course.heading}</h3>
        <p>{course.description}</p>
      </div>
      <div>
        <div className='flex justify-evenly mt-20'>
          <button className="outline_btn">REVIEW COURSE</button>
          <button className="blue_btn">
            <Link href={`/CourseOverview/${courseIndex}`}>
              CONTINUE LEARNING
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseDetails;