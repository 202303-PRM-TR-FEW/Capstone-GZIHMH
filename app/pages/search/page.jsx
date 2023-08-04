'use client'
import React, { useEffect, useState } from 'react';
import CheckElement from '@/components/CheckElement';
import Recommended from '@/components/Recommended';
import SearchBar from '@/components/SearchBar';
import TopSearches from '@/components/TopSearches';
import { getCourses } from '../api/getCourses';
import categories_db from '@/utils/categories_db.js';
import db from '@/utils/db';
import Star from '@/components/Star';
import getSearchResults from '../api/getSearchResults';

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
  const [isSearched, setIsSearched] = useState(false);
  const [searchResults, setSearchResults] = useState('');
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
  const handleSearch = async (searchQuery) => {

    try {
      const results = await getSearchResults(searchQuery);
      setSearchResults(results);
      setIsSearched(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  return (
    <section className="m-6">
      <h1>Find your favorites</h1>
      <SearchBar onSearch={handleSearch}/>
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
      {isSearched && (
        <>
          <hr className="my-2 mt-8 hidden md:flex border-gray-300 w-4/5" />
          <div>
            <h2>Search Results</h2>
            <ul className="flex flex-wrap md:flex-row my-5">
              {searchResults.map((result, index) => (
                <li key={index}>
                  <Recommended
                    path={result.title}
                    thumbnail={result.thumbnail}
                    courseName={result.title}
                    tutorName={getPersonName(result.tutorId)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      <hr className="my-2 mt-8 hidden md:flex border-gray-300 w-4/5" />
      <h2>RECOMMENDED FOR YOU</h2>
      <div>
        <ul className="flex flex-wrap md:flex-row my-5">
          {courses
          .slice(0,6)
          .map((course) => (
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