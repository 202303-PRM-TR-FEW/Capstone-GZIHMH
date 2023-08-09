'use client'
import ListElement from '@/components/ListElement';
import React, {Suspense,useState,useEffect} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';
import Loading from '@/components/Loading';
import getCourses from '../api/getCourses';
import { useSelector } from 'react-redux';
import { useAuthContext } from '@/context/AuthContext';
const Page = () => {
    const user = useAuthContext()
    const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses(user.user.isAnonymous);
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



