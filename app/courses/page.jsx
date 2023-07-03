import React from 'react';
import Image from 'next/image';

const Page = () => {
  return (
    <div className="flex">

      <section className="flex-1">

        <div className="flex flex-row justify-evenly m-5">
          <h1 className='w-430 h-42 flex-grow-1 m-0 overflow-hidden text-4xl font-semibold leading-10 text-left tracking-normal whitespace-pre-line opacity-100 visible text-gray-800 font-rubik'>My Learning</h1>
          <p className="flex flex-row justify-between p-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 self-start text-gray-500 hover:text-gray-600 fill-current m-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            <span className='w-430 h-42 flex-grow-1 m-0 overflow-hidden text-lg leading-10 text-left tracking-normal whitespace-pre-line opacity-90 visible text-gray-600 font-rubik'>Statistics
            </span> </p>
        </div>

        <div className='flex flex-row rounded-2xl justify-evenly m-5 items-center flex-shrink-0 flex-grow-0 self-stretch w-576 h-154 opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-blue-500'>
        <img 
            src='/photo.jpg'
            width={200}
            height={190}
            className=' rounded-2xl m-2'
            alt="teacher's photo"
            />
          <div>
            <div className="flex justify-between">
              <h2 className='text-2xl font-bold text-gray-800'>Becoming a Photographer</h2>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start text-gray-500 hover:text-blue-400 fill-current m-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                 </svg></span>
            </div>
            <p>Clara Manning</p>
            <input type="range" value={5} className="w-full h-full opacity-100 bg-white rounded-full mt-5"/>
            <p className='font-semibold'>0% complete</p>
          </div>
        </div>
        
        <div className='flex flex-row rounded-2xl justify-evenly m-5 items-center flex-shrink-0 flex-grow-0 self-stretch w-576 h-154 opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-blue-500'>
        <img 
            src='/photo.jpg'
            width={200}
            height={190}
            className=' rounded-2xl m-2'
            alt="teacher's photo"
            />
          <div>
            <div className="flex flex-row justify-between p-5">
              <h2 className='text-2xl font-bold text-gray-800'>Becoming a Photographer</h2>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start text-gray-500 hover:text-blue-400 fill-current m-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                 </svg></span>
            </div>
            <p>Clara Manning</p>
            <input type="range" value={5} className="w-full h-full opacity-100 bg-white rounded-full mt-5"/>
            <p className='font-semibold'>0% complete</p>
          </div>
        </div>
        
        <div className='flex flex-row rounded-2xl justify-evenly m-5 items-center flex-shrink-0 flex-grow-0 self-stretch w-576 h-154 opacity-100 bg-white hover:bg-blue-200 bg-opacity-30 rounded-5 border hover:border-blue-500'>
        <img 
            src='/photo.jpg'
            width={200}
            height={190}
            className=' rounded-2xl m-2'
            alt="teacher's photo"
            />
          <div>
            <div className="flex flex-row justify-between p-5">
              <h2 className='text-2xl font-bold text-gray-800'>Becoming a Photographer</h2>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-start text-gray-500 hover:text-blue-400 fill-current m-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                 </svg></span>
            </div>
            <p>Clara Manning</p>
            <input type="range" value={5} className="w-full h-full opacity-100 bg-white rounded-full mt-5"/>
            <p className='font-semibold'>0% complete</p>
          </div>
        </div>

      </section>
      <section className=" flex-1">
        <div>
          <img src="/photo.jpg" alt="Course Image" width={720} height={400} className='rounded-3xl m-5'/>
          <h2 className='w-430 h-42 flex-grow-1 m-0 overflow-hidden text-2xl font-semibold leading-10 text-left tracking-normal whitespace-pre-line opacity-100 visible text-gray-800 font-rubik'>Becoming a Photographer</h2>
          <div> 
            <div className='flex flex-row m-2 bg-white p-2 rounded-3xl w-1/4 shadow-lg'>
               <img src="photo.jpg" alt=""  width={40} height={40} className='rounded-full'/>
               <p className='w-120 p-3 h-22 flex-grow-1 overflow-hidden text-base font-normal leading-5 text-left tracking-normal whitespace-pre-line opacity-100 visible text-gray-800 font-rubik'>Clara Manning</p>
            </div>
                <p className='flex flex-row'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-500 hover:text-gray-600 fill-current m-2 ">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 4v4l4 2-4 2-4-2V6h4z" /></svg>
                   <span>43m</span></p>
                 <p className='flex flex-row'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-500 hover:text-gray-600 fill-current m-2 mb-5">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                     <span>4.7/5.2</span></p>
            <div>
              <h3 className='w-430 h-42 flex-grow-1 m-0 overflow-hidden text-xl font-semibold leading-10 text-left tracking-normal whitespace-pre-line opacity-100 visible  font-rubik'>Course Description</h3>
              <p className=' w-430 h-42 flex-grow-1 m-0 overflow-hidden mb-5 text-left tracking-normal opacity-90 visible'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis voluptate cumque odio ullam molestiae Error beatae perspiciatis eius corrupti doloribus, consequatur aliquam pariatur?</p>
              <div className='flex justify-evenly'>
                <button className="text-blue-500 text-1xl font-bold bg-transparent border border-blue-500 w-80 p-2  h-11 rounded-2xl hover:text-white hover:bg-blue-400">REVIEW COURSE</button>
                <button className="text-white text-1xl font-bold bg-blue-400 border border-blue-500 w-80 p-2  h-11 rounded-2xl hover:text-blue-500 hover:bg-transparent ">CONTINUE LEARNING</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  );
};

export default Page;
