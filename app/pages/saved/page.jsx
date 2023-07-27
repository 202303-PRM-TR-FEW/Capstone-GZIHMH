'use client'
import React, {Suspense} from 'react';
import SavedCourses from '@/components/SavedCourses';
import db from '@/utils/db';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';
import Loading from '@/components/Loading';

export default function page() {
  const savedCourses = db.courses.filter((course) => course.saved);

  return (
    <div className='text-black'>
     <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<Loading />}>
      <SavedCourses savedCourses={savedCourses} />
      </Suspense>
          </PersistGate>
       </Provider>
    </div>
  );
}