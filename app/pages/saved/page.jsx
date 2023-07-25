import React, {Suspense} from 'react';
import SavedCourses from '@/components/SavedCourses';
import db from '@/utils/db';
import Loading from '@/components/Loading';

export default function page() {
  const savedCourses = db.courses.filter((course) => course.saved);

  return (
    <div className='text-black'>
      <Suspense fallback={<Loading />}>
      <SavedCourses savedCourses={savedCourses} />
      </Suspense>
    </div>
  );
}