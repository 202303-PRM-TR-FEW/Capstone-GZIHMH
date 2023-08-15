import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { saveCourse, removeCourse } from '@/redux/actions';
import { selectSavedCourses } from '@/redux/selectors';
import db from '../utils/db';
import { shuffleArray } from '@/utils/helpers';
import SaveButton from './SaveButton';
import Link from 'next/link';

const MyLearning = ({data ,user} ) => {
    const savedCourses = useSelector(selectSavedCourses);
    const [coursesToShow, setCoursesToShow] = useState([]);
    const [seeAll,setSeeAll] = useState(false)

    useEffect(() => {
        const shuffledCourses = shuffleArray(db.courses);
        if (!seeAll) {
        setCoursesToShow(data.slice(0, 2));
            
        }
    }, []);


  

    const handleCourseClick = (courseId) => {
        console.log(`Navigating to course with id: ${courseId}`);
    };


    return (
        <div>
 <div className='grid grid-cols-1 gap-4 md:grid-cols-2  p-2'>
            {data.map((course) => (
                <div
                    key={course.id}
                    className='relative flex  p-2 items-start justify-start bg-white rounded-xl dark:bg-white dark:text-white text-slate-700 cursor-pointer'
                    onClick={() => handleCourseClick(course.id)}
                >
                    <div className='relative rounded-2xl overflow-hidden'>
                        <Image
                            src={course.thumbnail}
                            height={152}
                            width={180}
                            alt={course.title}
                        />
                    </div>
                    <div className='flex flex-col flex-grow p-3'>
                        <div className='flex justify-between'>
                            <h2 className='text-xl font-bold mr-8'>{course.title}</h2>
                            
                                <SaveButton user={user} isSaved={course.isSaved}/>
                               
                            
                           
                        </div>
                        <p className='tutor_name mb-3'>{course.tutor.name}</p>
                        <div className='bg-gray-200 h-2 w-full rounded-xl overflow-hidden mx-2 my-1.5'>
                            <div
                                className='h-full bg-primary rounded-lg'
                                style={{ width: '30%' }}
                            ></div>
                        </div>
                        <p className='text'> 30% complete</p>
                    </div>
                </div>
            ))}

       
        </div>
         <div className="flex justify-center mx-auto mt-8 p-2">
        

            </div>
            <div className='flex justify-center mx-auto p-2'>
             <Link href='/pages/courses' passHref>
                 <button onClick={()=>setSeeAll(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-16 rounded-xl'>
                     SEE ALL
                 </button>
             </Link>
         </div>
        </div>
       
    );
};

export default MyLearning;
