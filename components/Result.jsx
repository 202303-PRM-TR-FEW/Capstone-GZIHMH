import React from 'react';
import Recommended from '@/components/Recommended';

const Result = ({ level, courses, getPersonName }) => {
  // Filter courses by the selected level
  const filterCoursesByLevel = (level) => {
    return courses.filter((course) => course.level === level);
  };

  const filteredCourses = filterCoursesByLevel(level);

  return (
    <>
      <hr className="my-2 mt-8 hidden md:flex border-gray-300 w-4/5" />
      <div>
        <h2>{level} Courses</h2>
        <ul className="flex flex-wrap md:flex-row my-5">
          {filteredCourses.map((course) => (
            <li key={course.id}>
              <Recommended
                path={course.url}
                thumbnail={course.image}
                courseName={course.title}
                tutorName={getPersonName(course.tutorId)}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Result;
