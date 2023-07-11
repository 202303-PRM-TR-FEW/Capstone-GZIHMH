import React from 'react'

const StatisticsGoalStreak = () => {
  return (
    
    
    
    
    <div className='flex items-center justify-center h-screen '>


      <div className='rounded-2xl bg-white w-100 h-30 m-2 flex flex-col'>
        <div className='flex items-center justify-center flex-grow'> 
        
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-dot" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
</svg>


          <div className='text-gray-600 px-6 p-3  '>GOAL</div>
        </div>
        <div className='bg-blue-50 p-3 px-10 my-3 mx-7  rounded-2xl '>
            <p className='text-blue-500'>2/3 days</p>
          </div>
      </div>







      <div className='rounded-2xl bg-white w-100 h-30 m-2 flex flex-col'>
        <div className='flex items-center justify-center  flex-grow'> 
        

          
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
</svg>

          <div className='text-gray-600 px-6 p-3  '> STREAK </div>



        </div>
        <div className='bg-blue-50 p-3 px-10 my-3 mx-7  rounded-2xl '>
            <p className='text-blue-500'> 103 days</p>
          </div>
      </div>






    </div>
  );
};

export default StatisticsGoalStreak

