'use client'
// page.js
import ListElement from '@/components/ListElement';
import React, { useState, useEffect, Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';
import Loading from '@/components/Loading';
import { getCourses } from '../api/getCourses';

const Page = () => {
    const [coursesData, setCoursesData] = useState([]);

    useEffect(() => {
      // Fetch the courses data on the client side
      fetchCourses();
    }, []);
  
    async function fetchCourses() {
      try {
        const coursesData = await getCourses();
        setCoursesData(coursesData); // Set the fetched courses data in the state
      } catch (error) {
        console.error('Error fetching courses data:', error);
      }
    }
  return (
    <div>
      <div className="text-black">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Suspense fallback={<Loading />}>
              <ListElement coursesDataArray={coursesData} />
            </Suspense>
          </PersistGate>
        </Provider>
      </div>
    </div>
  );
};

export default Page;





