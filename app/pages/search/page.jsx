'use client'
import React, { useEffect, useState } from 'react';
import CheckElement from '@/components/CheckElement';
import Recommended from '@/components/Recommended';
import SearchBar from '@/components/SearchBar';
import TopSearches from '@/components/TopSearches';
import { getCourses } from '../api/getCourses';
import categories_db from '@/utils/categories_db';
import db from '@/utils/db';
import Star from '@/components/Star';

const Page = () => {
  const Top = [
    'Marketing Strategy',
    'UX Design',
    'Excel',
    'Adobe Photoshop',
    'CRM',
    'Photography',
    'Content Making',
  ];

  const getPersonName = (userId) => {
    const person = db.person.find((p) => p.id === userId);
    return person ? person.name : '';
  };

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses();
      setCourses(data.data);
    };

    fetchData();
  }, []);

  return (
    <section className="m-6">
      <h1>Find your favorites</h1>
      <SearchBar />
      <hr className="my-2 mt-8 hidden md:flex border-gray-300 w-4/5" />
      <h2>TOP SEARCHES</h2>
      <div className="flex flex-wrap md:flex-row">
        {Top.map((category, index) => (
          <TopSearches key={index} item={category} index={index} />
        ))}
      </div>
      <hr className="hidden md:flex my-2 mt-8 border-gray-300 w-4/5" />
      <h2>CATEGORIES</h2>
      <div className="flex flex-wrap md:flex-row my-5">
        {categories_db.map((category) => (
          <CheckElement key={category.id} id={category.id} name={category.name} />
        ))}
      </div>
      <hr className="my-2 mt-8 hidden md:flex border-gray-300 w-4/5" />
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col mr-44">
          <h2>Rating</h2>
          <div className="mt-3 my-5">
            <Star key="rating" rating={3} />
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Level</h2>
          <div className="flex flex-row mt-3 my-5">
            <CheckElement key="beginner" id="beginner" name="Beginner" />
            <CheckElement key="intermediate" id="intermediate" name="Intermediate" />
            <CheckElement key="professional" id="professional" name="Professional" />
          </div>
        </div>
      </div>
      <hr className="my-2 mt-8 hidden md:flex border-gray-300 w-4/5" />
      <h2>RECOMMENDED FOR YOU</h2>
      <div>
        <ul className="flex flex-wrap md:flex-row my-5">
          {courses.map((course) => (
            <li key={course.id}>
              <Recommended
                path={course.url}
                thumbnail={course.image}
                courseName={course.title}
                tutorName={getPersonName(course.tutorId)}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;