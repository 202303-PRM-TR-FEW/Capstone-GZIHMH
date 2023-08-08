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
import { isAnonymous } from '@/redux/selectors'
import { useSelector } from 'react-redux';
import applyFilters from '../api/applyFilters';

const Page = () => {
  const isanon = useSelector(isAnonymous)
    console.log("redux is anon is: ",isanon)
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
  const [filteredResults,setFilteredResults]= useState(null)
  const [selectedRating, setSelectedRating] = useState(0);
  const [selectedLevels, setSelectedLevels] = useState([]);
  const [filtersChanged, setFiltersChanged] = useState(false);
  

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourses(isanon);
      setCourses(data);
      
    };
    
    try { fetchData(); }catch{setCourses([])}
  }, []);
  useEffect(() => {
    console.log('Selected levels have changed:', selectedLevels);
    if (filtersChanged) {
      console.log('Selected levels and rating have changed:', selectedLevels, selectedRating);
      handleFilters();
      setFiltersChanged(false);
    }
  }, [filtersChanged]);
 
  const handleSearch = async (searchQuery) => {

    try {
      const results = await getSearchResults(searchQuery,isanon);
      setSearchResults(results);
      setIsSearched(true);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
  const handleStarClick =async (rating) => {
    setSelectedRating(rating);
    setFiltersChanged(true);
  };
  const handleLevelChange = async (levelName) => {
    setSelectedLevels((prevSelectedLevels) => {
      if (prevSelectedLevels.includes(levelName)) {
        return prevSelectedLevels.filter((level) => level !== levelName);
      } else {
        return [...prevSelectedLevels, levelName];
      }
    });
    setFiltersChanged(true);
};
  const handleFilters = async () => {
    console.log("im in handle filters")
    const filteredRes = await applyFilters(searchResults, selectedLevels, selectedRating);
    setFilteredResults(filteredRes)
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
            <Star key="rating"rating={selectedRating} onClick={handleStarClick} />
          </div>
        </div>
        <div className="flex flex-col">
          <h2>Level</h2>
          <div className="flex flex-row mt-3 my-5">
            <CheckElement key="beginner" id="beginner" name="Beginner" handleLevelChange={handleLevelChange}/>
            <CheckElement key="intermediate" id="intermediate" name="Intermediate" handleLevelChange={handleLevelChange}/>
            <CheckElement key="Advanced" id="Advanced" name="Advanced" handleLevelChange={handleLevelChange}/>
          </div>
        </div>
      </div>
      {isSearched && (
        <>
          {filteredResults ? (
            <>
              <hr className="my-2 mt-8 hidden md:flex border-gray-300 w-4/5" />
              <div>
                <h2>Search Results</h2>
                <ul className="flex flex-wrap md:flex-row my-5">
                  {filteredResults.map((result, index) => (
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
          ) : (
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
        </>
      )}
      <hr className="my-2 mt-8 hidden md:flex border-gray-300 w-4/5" />
      <h2>RECOMMENDED FOR YOU</h2>
      <div>
        <ul className="flex flex-wrap md:flex-row my-5">
          {courses
            .slice(0,6).map((course) => (
            <li key={course.id}>
              <Recommended
                path={course.title}
                thumbnail={course.thumbnail}
                courseName={course.title}
                tutorName={course.tutor.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Page;