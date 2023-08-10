'use client'
import ListElement from '@/components/ListElement';
import React, {Suspense,useState,useEffect} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';
import Loading from '@/components/Loading';
import getCourses from '../api/getCourses';
import { isAnonymous } from '@/redux/selectors'
import { useSelector } from 'react-redux';
const Page = () => {
    const [courses, setCourses] = useState([]);
    const isanon = useSelector(isAnonymous);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses(isanon);
      setCourses(data);
      
    };
    
    try { fetchData(); }catch{setCourses([])}
  }, []);
    return (
        <div>
            <div className="text-black">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback={<Loading />}>
                            <ListElement courses={courses} />
                    </Suspense>
                </PersistGate>
            </Provider>
        </div>
           
        </div>
    )
}

export default Page



