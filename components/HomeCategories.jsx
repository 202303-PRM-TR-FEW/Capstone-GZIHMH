

import React from 'react'
const HomeCategories = ({data}) => {

    return (


        <div className='flex flex-col md:flex-row w-full p-2  md:justify-between'>
        {data.map((category) => (
          <div key={category.id} className='p-2'>
            <div className='bg-white shadow-md text-xs w-full py-2 px-8 rounded-2xl flex flex-col  justify-center items-center  hover:bg-blue-200 hover:border-blue-500   '>
            <div className=' text-gray-500  '>
              <div
                dangerouslySetInnerHTML={{ __html: category.svg }} />
                
            </div>


            <p className=  " text-gray-600 text-bold p-2 rounded-2xl " >

               {category.name}

             </p>


            
              
            </div>

           
           
          </div>
        ))}
      </div>


    );
};


export default HomeCategories;