
import React from 'react';
//import Image from 'next/image';
import db from '../utils/db';


function SavedCourses({ savedCourses }) {
    return (
      <div>
        {savedCourses?.map((course) => (
          <div key={course.id}>
            {/* Render the saved course details */}
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    );
  }

  export default SavedCourses
