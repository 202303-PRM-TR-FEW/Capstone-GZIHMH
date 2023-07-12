import React from 'react'

const StatisticsGoalStreak = () => {
  return (
    
    
    
    
    <div className='flex items-center justify-center h-screen '>


      <div className='rounded-2xl bg-white w-auto h-30 m-2 flex flex-col'>
        <div className='flex items-center justify-center flex-grow'> 
        
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dot" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
</svg>


          <div className='text-gray-600 px-6 p-3 font-bold text-sm '>GOAL</div>
        </div>
        <div className='bg-blue-50 p-5 px-20  mb-3   mx-4  rounded-2xl '>
            <p className='text-blue-500 font-bold '>2/3 days</p>
          </div>
      </div>







      <div className='rounded-2xl bg-white w-auto h-30 m-2 flex flex-col'>
        <div className='flex items-center justify-center  flex-grow'> 
        

          
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="20" height="20" viewBox="0 0 24 24" stroke-width="3" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg>

          <div className='text-gray-600 px-6 p-3 font-bold text-sm  '> STREAK </div>



        </div>
        <div className='bg-lime-50  p-5 px-20  mb-3   mx-4  rounded-2xl '>
            <p className='text-lime-300 font-bold '> 103 days</p>
          </div>
      </div>






    </div>
  );
};

export default StatisticsGoalStreak

