import React from 'react';
import SavedCourses from '@/components/SavedCourses';
import db from '@/utils/db';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';
export default function page() {
  const savedCourses = db.courses.filter((course) => course.saved);

  return (
    <div className='text-black'>
     <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <SavedCourses  />
          </PersistGate>
       </Provider>
    </div>
  );
}