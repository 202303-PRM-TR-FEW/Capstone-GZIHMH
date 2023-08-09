'use client'
import ListElement from '@/components/ListElement';
import React, {Suspense,useState,useEffect} from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import { Provider } from 'react-redux';
import Loading from '@/components/Loading';
import getCourses from '../api/getCourses';
import { useAuthContext } from '@/context/AuthContext';
const Page = () => {
    const user = useAuthContext()
  const [courses, setCourses] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses(user.user.isAnonymous);
      setCourses(data);
      setIsloading(false)
      
    };
    
    try { fetchData(); }catch{setCourses([])}
  }, []);
  if (isloading) {
    return <p>loading </p>
  }
    return (
        <div>
            <div className="text-black">
                            <ListElement courses={courses} />
        </div>
           
        </div>
    )
}

export default Page



