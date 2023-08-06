// ListElement.js
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Details from './Details';
import db from '../utils/db';
import { Statistics } from '../utils/icons';
import { useDispatch, useSelector } from 'react-redux';
import { saveCourse, removeCourse } from '@/redux/actions';
import { selectSavedCourses } from '@/redux/selectors';

function ListElement({ coursesDataArray }) {
  const dispatch = useDispatch();
  const savedCourses = useSelector(selectSavedCourses);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);
  const [randomCourses, setRandomCourses] = useState([]);

  useEffect(() => {
    const getAllCourses = () => {
      setRandomCourses([...db.courses]);
    };

    getAllCourses();
  }, []);

  const isCourseSaved = (courseExists) => {
    return courseExists ? 'text-primary' : 'text-gray-400';
  };

  const handleCourseClick = (index) => {
    setSelectedCourseIndex(index);
  };

  const getPersonName = (user_id) => {
    const person = db.person.find((p) => p.id === user_id);
    return person ? person.name : '';
  };

  const handleToggle = (courseId) => {
    const course = db.courses.find((course) => course.id === courseId);
    if (course) {
      if (course.saved) {
        const courseExists = savedCourses.some((course) => course.id === courseId);
        if (courseExists) {
          dispatch(removeCourse(courseId));
        }
        course.saved = false;
      } else {
        course.saved = true;
        dispatch(saveCourse(course));
      }
    }
    setRandomCourses([...db.courses]);
  };

  const renderCourseList = () => {
    if (!Array.isArray(coursesDataArray)) {
      // Handle the case where coursesDataArray is not an array (e.g., if it's still loading or an object)
      return <p>Loading courses...</p>;
    }

    if (coursesDataArray.length === 0) {
      // Handle the case where there are no courses
      return <p>No courses available.</p>;
    }

    return coursesDataArray.map((course, index) => (
      <div
        className={`flex my-2 rounded-2xl opacity-100 bg-white ${
          selectedCourseIndex === index ? 'border-primary bg-blue-200' : 'hover:bg-blue-200'
        } bg-opacity-30 rounded-5 border hover:border-primary`}
        key={course.id}
        onClick={() => handleCourseClick(index)}
      >
        <div className='flex flex-row justify-between'>
          <Image
            src={course.image}
            width={180}
            height={152}
            alt={course.title}
            className='max-w-[180px] max-h-[152px]'
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className='w-full pt-2'>
          <div className='flex justify-between'>
            <h2>{course.title}</h2>
            <button onClick={() => handleToggle(course.id)}>
              <span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className={`w-5 h-5 self-start ${isCourseSaved(
                    savedCourses.some((c) => c.id === course.id)
                  )} fill-current m-2`}
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
                  />
                </svg>
              </span>
            </button>
          </div>
          <p className='tutor_name mb-3'>{getPersonName(course.user_id)}</p>
          <div className='bg-gray-200 h-2 w-auto rounded-xl overflow-hidden mx-2 my-1.5'>
            <div
              className='h-full bg-primary rounded-lg'
              style={{ width: `${parseInt(course.completion_ratio)}%` }}
            ></div>
          </div>
          <p className='text'>{course.completion_ratio} complete</p>
        </div>
      </div>
    ));
  };

  return (
    <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col '>
      <div className='flex flex-col lg:flex-row md:flex-col sm:flex-col '>
        <div className='rounded-2xl md:p-2 flex flex-col w-full'>
          <div className='flex flex-row justify-between '>
            <h1 className='x-3 py-2'>My Learning</h1>
            <div className='flex flex-row justify-between px-3 py-2 text-gray-400 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary hover:text-gray-700'>
              <a className='flex text-lg items-center' href='/pages/statistics'>
                <Statistics />
                <span className='px-3 py-2'>Statistics</span>
              </a>
            </div>
          </div>

          <div className='px-4'>
            <div className='flex-1 w-full lg:max-h-[800px] overflow-y-auto'>
              {renderCourseList()}
            </div>
          </div>
        </div>
        <div className='w-full h-full bg-white'>
          {selectedCourseIndex !== null && <Details courseIndex={selectedCourseIndex} />}
        </div>
      </div>
    </div>
  );
}

export default ListElement;
