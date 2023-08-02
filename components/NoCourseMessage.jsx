import React from 'react';

function NoCourseMessage() {
    return (
        <div className='absolute top-1/4 left-1/4  items-center justify-center text-center h-full  w-full max-w-[600px] max-h-[500px] '>
            <div className='bg-white pt-20 rounded-2xl justify-center text-gray-900 font-bold shadow-lg h-full  w-full '>
                <div className='text-base sm:text-base md:text-base lg:text-base xl:text-base 2xl:text-base @screen (max-width: 300px) text-xs'>
                    <span>Oops!</span> 
                    <br/>
                 You do not have any saved courses yet
                 <div className="flex items-center justify-center h-full pt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-sad-2" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                      <path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
                      <path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
                      <path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
                    </svg>
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
