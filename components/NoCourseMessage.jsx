import React from 'react';
import { Sad_Face } from '../utils/icons';

function NoCourseMessage() {
    return (
        <div className='absolute top-1/4 left-1/4 rounded-2xl shadow-lg bg-white justify-center text-center h-1/2 w-1/2  '>
            <div className='justify-center text-gray-900 font-bold absolute mt-12 pt-2 top-1 left-1/4 right-1/4 bottom-1/4'>
                <div className=''>
                    <span>Oops!</span> 
                    <br/>
                 You do not have any saved courses yet
                 <div className="flex items-center justify-center h-full pb-4 mb-12">
                    <Sad_Face/>
                </div>
                </div>
            <div className='flex flex-col items-center justify-center gap-2 w-full '>
                <a className="flex text-sm items-center text-primary font-bold min-w-[170px] bg-transparent border border-primary p-2  h-9 rounded-2xl hover:text-white hover:bg-primary" href="/pages/home"> Check our featured courses  </a>
                <a className="flex text-sm items-center text-primary font-bold min-w-[170px] bg-transparent border border-primary p-2  h-9 rounded-2xl hover:text-white hover:bg-primary" href="/pages/search">Search your favorite courses </a>
                </div>
                
            </div>
        </div>
    );
}

export default NoCourseMessage;
