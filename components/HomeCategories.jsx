

import React from 'react'
import categories_db from '../utils/categories_db'; 

const HomeCategories = () => {

    return (


        <div className='flex flex-row'>
        {categories_db.map((categoriesItem) => (
          <div key={categoriesItem.id} className='bg-white shadow-md mx-3  rounded-2xl flex flex-col justify-center items-center  hover:bg-blue-200 hover:border-blue-500   '>


            <div className='mt-2  '>
                {categoriesItem.svg}
            </div>


            <p className=  " text-gray-600 text-bold py-2 px-10  mx-4 rounded-2xl " >

               {categoriesItem.name}

             </p>


            
           
          </div>
        ))}
      </div>


    );
};


export default HomeCategories;