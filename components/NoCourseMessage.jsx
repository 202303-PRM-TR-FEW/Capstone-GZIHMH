import React from 'react';
import { Sad_Face } from '../utils/icons';

function NoCourseMessage() {
    return (
        <div className='absolute top-1/4 left-1/4  items-center justify-center text-center h-full  w-full max-w-[600px] max-h-[500px] '>
            <div className='bg-white pt-20 rounded-2xl justify-center text-gray-900 font-bold shadow-lg h-full  w-full '>
                <div className='text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base @screen (max-width: 300px) text-xs'>
                    <span>Oops!</span> 
                    <br/>
                 You do not have any saved courses yet
                 <div className="flex items-center justify-center h-full pt-4">
                    <Sad_Face/>
                </div>
                </div>
                <div className='flex sm:text-xs md:text-sm lg:text-3xl text-3xl flex-col items-center justify-center mt-10 lg:mt-10 md:mt-3 sm:mt-1 gap-2'>
                  <a className="flex text-lg items-center" href="/pages/home"><button className="text-primary font-bold bg-transparent border border-primary p-2 max-w-[450px] w-full  text-sm h-9  rounded-2xl hover:text-white hover:bg-primary"> Check our featured courses </button> </a>
                  <a className="flex text-lg items-center" href="/pages/search"><button className="text-primary font-bold bg-transparent border border-primary p-2 max-w-[450px] w-full  h-9 text-sm  rounded-2xl hover:text-white hover:bg-primary">Search your favorite courses</button> </a>
                </div>
                
            </div>
        </div>
    );
}

export default NoCourseMessage;
