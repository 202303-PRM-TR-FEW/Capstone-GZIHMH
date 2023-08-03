import React from 'react'

const HomeCategories = ({box, title, imageSrc}) => {
    return (
        <div>




      <div className= {` bg-white shadow-md mx-3  rounded-2xl flex flex-col justify-center items-center  hover:bg-[#CBE1FA] hover:border-blue-500 ${box}`}    > 

              
            

            <div className='mt-2 '>
            <div dangerouslySetInnerHTML={{ __html: imageSrc }} />
            </div>

            


            <p className=  " text-gray-600 text-bold py-2 px-10     mx-4  rounded-2xl   hover:text-[#2E8DFF] " >

                {title}

            </p>
            

            
        </div>

    </div>
    );
};


export default HomeCategories;