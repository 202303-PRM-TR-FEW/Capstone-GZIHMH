import React from 'react'

const LastYearComparison = () => {
  return (
   <div className=' ' >




     <div className='flex flex-row justify-around  '> 

    
     <h className='text-gray-600 flex item-start text-sm'> STUDY  <br/>  TIME   </h>
       
        
               <div > 
                <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mx-2 mt-3">
                <div className="bg-blue-600 text-xs font-medium text-blue-100 text-right p-0.5 leading-none rounded-full" style={{ width: '45%' }}> 45%</div>
                </div>
                </div>

     </div>
      <hr className="border-t-2 border-gray my-1 rounded-lg" />



      <div className='flex flex-row justify-around'> 


      
      <h className='text-gray-600  text-sm'> HOURS  <br/>  LEARNED   </h>
       

        
        <div> 
        <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mx-2 mt-3 ">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-right p-0.5 leading-none rounded-full" style={{ width: '20%' }}> 20%</div>
        </div>
        </div>



    </div>
      <hr className="border-t-2  border-gray my-1 rounded-lg" />




      <div className='flex flex-row justify-around'> 

        
      <h4 className='text-gray-600  text-sm'> FINISHED  <br/>  COURSES  </h4>
       
        
        <div> 
        <div className="w-80 bg-gray-200 rounded-full dark:bg-gray-700 mx-2 mt-3">
        <div className="bg-blue-600 text-xs font-medium text-blue-100  text-right p-0.5 leading-none rounded-full" style={{ width: '70%' }}> 70%</div>
        </div>
        </div>
        
    </div>
   

      





  </div>
  )
}

export default LastYearComparison
