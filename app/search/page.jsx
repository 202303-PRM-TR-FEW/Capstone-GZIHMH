
import CheckElement from '@/components/CheckElement'
import Recommended from '@/components/Recommended'
import SearchBar from '@/components/SearchBar'
import TopSearches from '@/components/TopSearches'
import React from 'react'
import categories_db from '@/utils/categories_db'
import Star from '@/components/Star'
const page = () => {
    const Top = ["Marketing Strategy", "UX Design", "Excel", "Adobe Photoshop", "CRM", "Photography", "Content Making"]
    const searchurl = "/assets/images/searchex.jpeg";
    const courseName = "How to UX?";
    const tutorName = "Anna May";



    return (
        <section>
            <h1>Find your favorites</h1>

            <SearchBar />
            <hr className="my-2 mt-8 border-gray-300 w-4/5 " />
            <h2>TOP SEARCHES</h2>
            <div className='flex flex-row'>
                {Top.map((item, index) => (
                    <TopSearches item={item} index={index} />
                ))}
            </div>
            <hr className="my-2 mt-8 border-gray-300 w-4/5 " />
            <h2>CATEGORIES</h2>
            <div className='flex flex-row my-5'>
                {
                    categories_db.map((category) => (
                        <CheckElement id={category.id} name={category.name} />

                    ))
                }
            </div>
            <hr className="my-2 mt-8 border-gray-300 w-4/5 " />
            <div className='flex flex-row'>
                <div className='flex flex-col mr-44'>
                    <h2>Rating</h2>

                    <div className='mt-3 my-5'>
                        <Star rating={3} />
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h2 >Level</h2>
                    <div className='flex flex-row mt-3 my-5'>
                        <CheckElement id={'beginner'} name={'Beginner'} />
                        <CheckElement id={'intermediate'} name={'Intermediate'} />
                        <CheckElement id={'professional'} name={'Professional'} />
                    </div>


                </div>
            </div>
            <hr className="my-2 mt-8 border-gray-300 w-4/5 " />

            <h2>RECOMMENDED FOR YOU</h2>
            <div className='flex flex-row my-5'>
                <Recommended thumbnail={searchurl} courseName={courseName} tutorName={tutorName} />
                <Recommended thumbnail={searchurl} courseName={courseName} tutorName={tutorName} />

            </div>

        </section >
    )
}

export default page