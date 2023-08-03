import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { saveCourse, removeCourse } from '@/redux/actions';
import { selectSavedCourses } from '@/redux/selectors';
import db from '../utils/db';
import { shuffleArray } from '@/utils/helpers';

const MyLearning = () => {
    const dispatch = useDispatch();
    const savedCourses = useSelector(selectSavedCourses);
    const [coursesToShow, setCoursesToShow] = useState([]);

    useEffect(() => {
        const shuffledCourses = shuffleArray(db.courses);
        setCoursesToShow(shuffledCourses.slice(0, 2));
    }, []);

    const isCourseSaved = (courseId) => {
        return savedCourses.some((course) => course.id === courseId);
    };

    const handleToggle = (courseId) => {
        const course = db.courses.find((course) => course.id === courseId);
        if (course) {
            if (isCourseSaved(course.id)) {
                dispatch(removeCourse(course.id));
            } else {
                const newCourse = { ...course, saved: true };
                dispatch(saveCourse(newCourse));
            }
        }
    };

    const handleCourseClick = (courseId) => {
        console.log(`Navigating to course with id: ${courseId}`);
    };

    const getPersonName = (user_id) => {
        const person = db.person.find((p) => p.id === user_id);
        return person ? person.name : '';
    };

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            {coursesToShow.map((course) => (
                <div
                    key={course.id}
                    className='relative flex items-start justify-start p-1 rounded-xl dark:bg-white dark:text-white text-slate-700 cursor-pointer'
                    onClick={() => handleCourseClick(course.id)}
                >
                    <div className='w-[180px] h-[152px] relative rounded-2xl overflow-hidden'>
                        <Image
                            src={course.image}
                            layout='fill'
                            objectFit='cover'
                            alt={course.title}
                        />
                    </div>
                    <div className='flex flex-col flex-grow p-3'>
                        <div className='flex justify-between'>
                            <h2 className='text-xl font-bold mr-8'>{course.title}</h2>
                            <button
                                onClick={() => handleToggle(course.id)}
                                className={`absolute p-2 rounded-lg text-slate-400 group top-4 right-4 bg-slate-300 hover:cursor-pointer hover:bg-blue-200 group ${
                                    isCourseSaved(course.id) ? 'bg-blue-400' : 'bg-gray-400'
                                }`}
                            >
                                <span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth="0"
                                        viewBox="0 0 16 16"
                                        className="group-hover:text-blue-600 "
                                        height="16"
                                        width="16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                        <p className='tutor_name mb-3'>{getPersonName(course.user_id)}</p>
                        <div className='bg-gray-200 h-2 w-full rounded-xl overflow-hidden mx-2 my-1.5'>
                            <div
                                className='h-full bg-primary rounded-lg'
                                style={{ width: `${parseInt(course.completion_ratio)}%` }}
                            ></div>
                        </div>
                        <p className='text'>{course.completion_ratio} complete</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MyLearning;
